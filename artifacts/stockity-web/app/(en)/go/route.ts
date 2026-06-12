import { NextResponse } from "next/server";
import defaultConfig from "../../../data/cta-config.json";

function getCtaUrl(): string {
  if (process.env.CTA_URL) return process.env.CTA_URL;
  if (
    typeof defaultConfig.ctaUrl === "string" &&
    defaultConfig.ctaUrl.startsWith("http")
  ) {
    return defaultConfig.ctaUrl;
  }
  return "https://linkayi.com/stockity-page";
}

export async function GET() {
  const url = getCtaUrl();
  return NextResponse.redirect(url, { status: 307 });
}
