import { Router } from "express";
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";

const router = Router();

const configPath = resolve(process.cwd(), "../../artifacts/stockity-web/data/cta-config.json");

function readConfig(): { ctaUrl: string } {
  if (!existsSync(configPath)) {
    return { ctaUrl: "" };
  }
  try {
    return JSON.parse(readFileSync(configPath, "utf-8"));
  } catch {
    return { ctaUrl: "" };
  }
}

function writeConfig(data: { ctaUrl: string }): void {
  const dir = dirname(configPath);
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
  writeFileSync(configPath, JSON.stringify(data, null, 2), "utf-8");
}

router.get("/cta", (_req, res) => {
  res.json(readConfig());
});

router.put("/cta", (req, res) => {
  const { ctaUrl } = req.body as { ctaUrl?: string };
  if (!ctaUrl || typeof ctaUrl !== "string") {
    res.status(400).json({ error: "ctaUrl is required" });
    return;
  }
  writeConfig({ ctaUrl });
  res.json({ ok: true, ctaUrl });
});

export default router;
