module.exports = [
"[project]/artifacts/stockity-web/app/(id)/id/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>IdLayout,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.9_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "") || (process.env.REPLIT_DOMAINS ? `https://${process.env.REPLIT_DOMAINS.split(",")[0]}` : "https://stockity.id");
const title = "Stockity | Platform Trading Online Terpercaya – 140+ Aset";
const description = "Bergabung bersama 3,5 juta trader di Stockity. Trading saham, forex, kripto & komoditas dengan modal mulai $10. Platform legal, aman, penarikan cepat. Daftar gratis!";
const keywords = "platform trading online, investasi online, trading saham, forex, cryptocurrency, kripto, copy trading, aplikasi investasi, trading pemula, stockity";
const metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: title,
        template: "%s | Stockity"
    },
    description,
    keywords,
    authors: [
        {
            name: "Stockity"
        }
    ],
    creator: "Stockity",
    publisher: "Stockity",
    category: "keuangan",
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1
        }
    },
    openGraph: {
        title,
        description,
        url: `${siteUrl}/id`,
        siteName: "Stockity",
        locale: "id_ID",
        type: "website",
        images: [
            {
                url: "/opengraph.jpg",
                width: 1200,
                height: 630,
                alt: "Stockity — Platform Trading Online Terpercaya di Indonesia"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [
            "/opengraph.jpg"
        ]
    },
    alternates: {
        canonical: `${siteUrl}/id`,
        languages: {
            en: siteUrl,
            id: `${siteUrl}/id`,
            es: `${siteUrl}/es`,
            "pt-BR": `${siteUrl}/pt-br`,
            "x-default": siteUrl
        }
    }
};
const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": `${siteUrl}/#organization`,
            name: "Stockity",
            url: siteUrl,
            logo: {
                "@type": "ImageObject",
                url: `${siteUrl}/favicon.png`
            },
            description
        },
        {
            "@type": "WebPage",
            "@id": `${siteUrl}/id#webpage`,
            url: `${siteUrl}/id`,
            name: title,
            description,
            inLanguage: "id-ID",
            isPartOf: {
                "@id": `${siteUrl}/#website`
            }
        },
        {
            "@type": "FinancialService",
            "@id": `${siteUrl}/#service`,
            name: "Platform Trading Stockity",
            url: `${siteUrl}/id`,
            description: "Platform trading online dengan 140+ aset termasuk saham, forex, kripto, dan komoditas. Deposit minimal $10. Legal dan teregulasi.",
            provider: {
                "@id": `${siteUrl}/#organization`
            },
            areaServed: "ID",
            availableLanguage: [
                "Indonesian"
            ]
        }
    ]
};
function IdLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(jsonLd)
                }
            }, void 0, false, {
                fileName: "[project]/artifacts/stockity-web/app/(id)/id/layout.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true);
}
}),
"[project]/artifacts/stockity-web/app/(id)/id/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/artifacts/stockity-web/app/(id)/id/layout.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=artifacts_stockity-web_app_%28id%29_id_layout_tsx_1lnsad1._.js.map