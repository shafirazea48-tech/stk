module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/artifacts/stockity-web/app/api/sitemap-xml/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.9_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/server.js [app-route] (ecmascript)");
;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "") || (process.env.REPLIT_DOMAINS ? `https://${process.env.REPLIT_DOMAINS.split(",")[0]}` : "https://stockity.link");
function buildXml(urls) {
    const urlBlocks = urls.map((u)=>{
        const alts = u.alternates ? u.alternates.map((a)=>`  <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${a.href}"/>`).join("\n") : "";
        return [
            "<url>",
            `  <loc>${u.loc}</loc>`,
            alts,
            `  <changefreq>${u.changefreq}</changefreq>`,
            `  <priority>${u.priority}</priority>`,
            "</url>"
        ].filter(Boolean).join("\n");
    }).join("\n");
    return `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlBlocks}
</urlset>`;
}
function GET() {
    const homeAlts = [
        {
            hreflang: "en",
            href: siteUrl
        },
        {
            hreflang: "id",
            href: `${siteUrl}/id`
        },
        {
            hreflang: "es",
            href: `${siteUrl}/es`
        },
        {
            hreflang: "pt-BR",
            href: `${siteUrl}/pt-br`
        },
        {
            hreflang: "x-default",
            href: siteUrl
        }
    ];
    const pricingAlts = [
        {
            hreflang: "en",
            href: `${siteUrl}/pricing`
        },
        {
            hreflang: "id",
            href: `${siteUrl}/id/pricing`
        },
        {
            hreflang: "es",
            href: `${siteUrl}/es/pricing`
        },
        {
            hreflang: "pt-BR",
            href: `${siteUrl}/pt-br/pricing`
        },
        {
            hreflang: "x-default",
            href: `${siteUrl}/pricing`
        }
    ];
    const tournamentsAlts = [
        {
            hreflang: "en",
            href: `${siteUrl}/tournaments`
        },
        {
            hreflang: "id",
            href: `${siteUrl}/id/tournaments`
        },
        {
            hreflang: "es",
            href: `${siteUrl}/es/tournaments`
        },
        {
            hreflang: "pt-BR",
            href: `${siteUrl}/pt-br/tournaments`
        },
        {
            hreflang: "x-default",
            href: `${siteUrl}/tournaments`
        }
    ];
    const urls = [
        {
            loc: siteUrl,
            changefreq: "weekly",
            priority: "1.0",
            alternates: homeAlts
        },
        {
            loc: `${siteUrl}/id`,
            changefreq: "weekly",
            priority: "0.95",
            alternates: homeAlts
        },
        {
            loc: `${siteUrl}/es`,
            changefreq: "weekly",
            priority: "0.95",
            alternates: homeAlts
        },
        {
            loc: `${siteUrl}/pt-br`,
            changefreq: "weekly",
            priority: "0.95",
            alternates: homeAlts
        },
        {
            loc: `${siteUrl}/pricing`,
            changefreq: "monthly",
            priority: "0.85",
            alternates: pricingAlts
        },
        {
            loc: `${siteUrl}/id/pricing`,
            changefreq: "monthly",
            priority: "0.8",
            alternates: pricingAlts
        },
        {
            loc: `${siteUrl}/es/pricing`,
            changefreq: "monthly",
            priority: "0.8",
            alternates: pricingAlts
        },
        {
            loc: `${siteUrl}/pt-br/pricing`,
            changefreq: "monthly",
            priority: "0.8",
            alternates: pricingAlts
        },
        {
            loc: `${siteUrl}/tournaments`,
            changefreq: "daily",
            priority: "0.85",
            alternates: tournamentsAlts
        },
        {
            loc: `${siteUrl}/id/tournaments`,
            changefreq: "daily",
            priority: "0.8",
            alternates: tournamentsAlts
        },
        {
            loc: `${siteUrl}/es/tournaments`,
            changefreq: "daily",
            priority: "0.8",
            alternates: tournamentsAlts
        },
        {
            loc: `${siteUrl}/pt-br/tournaments`,
            changefreq: "daily",
            priority: "0.8",
            alternates: tournamentsAlts
        },
        {
            loc: `${siteUrl}/agreement`,
            changefreq: "yearly",
            priority: "0.4"
        },
        {
            loc: `${siteUrl}/aml-policy`,
            changefreq: "yearly",
            priority: "0.3"
        },
        {
            loc: `${siteUrl}/copy-trading-agreement`,
            changefreq: "yearly",
            priority: "0.3"
        }
    ];
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](buildXml(urls), {
        headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400"
        }
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0llui2e._.js.map