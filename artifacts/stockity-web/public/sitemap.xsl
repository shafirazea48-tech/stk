<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Sitemap — Stockity</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #0f1117; color: #e2e8f0; min-height: 100vh; }
          header { background: #151723; border-bottom: 1px solid #1e2340; padding: 24px 40px; display: flex; align-items: center; gap: 16px; }
          header img { width: 36px; height: 36px; }
          header h1 { font-size: 20px; font-weight: 700; color: #fff; }
          header span { font-size: 14px; color: #64748b; margin-left: 8px; }
          .container { max-width: 1100px; margin: 0 auto; padding: 40px 24px; }
          .meta { background: #151723; border: 1px solid #1e2340; border-radius: 12px; padding: 20px 28px; margin-bottom: 32px; display: flex; gap: 40px; }
          .meta-item { }
          .meta-item .label { font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px; }
          .meta-item .value { font-size: 22px; font-weight: 700; color: #0C8DF8; }
          table { width: 100%; border-collapse: collapse; background: #151723; border: 1px solid #1e2340; border-radius: 12px; overflow: hidden; }
          thead { background: #1a1f35; }
          th { padding: 14px 20px; text-align: left; font-size: 12px; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600; }
          td { padding: 14px 20px; border-top: 1px solid #1e2340; font-size: 14px; vertical-align: middle; }
          tr:hover td { background: #1a1f35; }
          a { color: #0C8DF8; text-decoration: none; word-break: break-all; }
          a:hover { color: #38bdf8; text-decoration: underline; }
          .badge { display: inline-block; padding: 3px 10px; border-radius: 20px; font-size: 12px; font-weight: 500; }
          .badge-daily { background: #052e16; color: #4ade80; }
          .badge-weekly { background: #0c1a3a; color: #60a5fa; }
          .badge-monthly { background: #1c1003; color: #fbbf24; }
          .badge-yearly { background: #1c0a0a; color: #f87171; }
          .priority { font-weight: 600; color: #94a3b8; }
          footer { text-align: center; padding: 32px; color: #334155; font-size: 13px; }
        </style>
      </head>
      <body>
        <header>
          <img src="/favicon.svg" alt="Stockity"/>
          <h1>Stockity Sitemap<span>XML Sitemap</span></h1>
        </header>
        <div class="container">
          <div class="meta">
            <div class="meta-item">
              <div class="label">Total URLs</div>
              <div class="value"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></div>
            </div>
            <div class="meta-item">
              <div class="label">Domain</div>
              <div class="value" style="font-size:16px;padding-top:4px">stockity.link</div>
            </div>
            <div class="meta-item">
              <div class="label">Generated</div>
              <div class="value" style="font-size:16px;padding-top:4px">Auto</div>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>URL</th>
                <th>Change Frequency</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td style="color:#334155;width:48px"><xsl:value-of select="position()"/></td>
                  <td><a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a></td>
                  <td>
                    <xsl:variable name="freq" select="sitemap:changefreq"/>
                    <span class="badge badge-{$freq}"><xsl:value-of select="$freq"/></span>
                  </td>
                  <td class="priority"><xsl:value-of select="sitemap:priority"/></td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>
        <footer>Stockity.link — XML Sitemap</footer>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
