import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import defaultConfig from "../../../data/cta-config.json";

const CONFIG_PATH = path.join(process.cwd(), "data", "cta-config.json");

function readConfig(): { ctaUrl: string } {
  try {
    const raw = fs.readFileSync(CONFIG_PATH, "utf-8");
    return JSON.parse(raw);
  } catch {
    return { ctaUrl: defaultConfig.ctaUrl };
  }
}

export async function GET() {
  const config = readConfig();
  return NextResponse.json(config);
}

export async function PUT(req: NextRequest) {
  if (process.env.VERCEL) {
    return NextResponse.json(
      { error: "Use the CTA_URL environment variable on Vercel to update the CTA URL." },
      { status: 405 }
    );
  }
  try {
    const body = await req.json();
    if (typeof body.ctaUrl !== "string" || !body.ctaUrl.startsWith("http")) {
      return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
    }
    const config = { ctaUrl: body.ctaUrl };
    fs.mkdirSync(path.dirname(CONFIG_PATH), { recursive: true });
    fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2), "utf-8");
    return NextResponse.json({ ok: true, ctaUrl: body.ctaUrl });
  } catch {
    return NextResponse.json({ error: "Failed to save" }, { status: 500 });
  }
}
