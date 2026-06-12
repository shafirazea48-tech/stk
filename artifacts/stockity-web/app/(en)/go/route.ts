import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

function getCtaUrl(): string {
  try {
    const configPath = path.join(process.cwd(), "data", "cta-config.json");
    const raw = fs.readFileSync(configPath, "utf-8");
    const config = JSON.parse(raw);
    if (typeof config.ctaUrl === "string" && config.ctaUrl.startsWith("http")) {
      return config.ctaUrl;
    }
  } catch {
    // fall through to default
  }
  return "https://stockity.id/auth?a=5b9215a90cb8&t=0";
}

export async function GET() {
  const url = getCtaUrl();
  return NextResponse.redirect(url, { status: 307 });
}
