module.exports = [
"[project]/artifacts/stockity-web/app/(en)/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EnLayout,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.2.9_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$nunito_sans_99c2e9e$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/nunito_sans_99c2e9e.js [app-rsc] (ecmascript)");
;
;
;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || (process.env.REPLIT_DOMAINS ? `https://${process.env.REPLIT_DOMAINS.split(",")[0]}` : "https://stockity.id");
const title = "Stockity | Online Trading Platform – 140+ Assets from $10";
const description = "Join 3.5M+ traders on Stockity. Trade stocks, forex, crypto & commodities starting from $10. Licensed & regulated, fast withdrawals. Sign up free!";
const metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: title,
        template: "%s | Stockity"
    },
    description,
    keywords: "online trading platform, stock trading, forex trading, cryptocurrency, crypto trading, copy trading, investment app, stockity",
    authors: [
        {
            name: "Stockity"
        }
    ],
    creator: "Stockity",
    publisher: "Stockity",
    category: "finance",
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
        url: "/",
        siteName: "Stockity",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "/opengraph.jpg",
                width: 1200,
                height: 630,
                alt: "Stockity — Making Investing Clear"
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
    icons: {
        icon: [
            {
                url: "/favicon.png",
                type: "image/png"
            },
            {
                url: "/favicon.svg",
                type: "image/svg+xml"
            }
        ],
        shortcut: "/favicon.png",
        apple: "/favicon.png"
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
            description,
            sameAs: []
        },
        {
            "@type": "WebSite",
            "@id": `${siteUrl}/#website`,
            url: siteUrl,
            name: "Stockity",
            description,
            publisher: {
                "@id": `${siteUrl}/#organization`
            },
            potentialAction: {
                "@type": "SearchAction",
                target: {
                    "@type": "EntryPoint",
                    urlTemplate: `${siteUrl}/?q={search_term_string}`
                },
                "query-input": "required name=search_term_string"
            }
        },
        {
            "@type": "FinancialService",
            "@id": `${siteUrl}/#service`,
            name: "Stockity Trading Platform",
            url: siteUrl,
            description: "Online trading platform offering 140+ assets including forex, stocks, crypto, and commodities. Minimum deposit $10. Licensed and regulated.",
            provider: {
                "@id": `${siteUrl}/#organization`
            },
            areaServed: "Worldwide",
            availableChannel: {
                "@type": "ServiceChannel",
                serviceUrl: siteUrl,
                availableLanguage: [
                    "English",
                    "Indonesian"
                ]
            }
        }
    ]
};
function EnLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("head", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "alternate",
                        hrefLang: "en",
                        href: siteUrl
                    }, void 0, false, {
                        fileName: "[project]/artifacts/stockity-web/app/(en)/layout.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "alternate",
                        hrefLang: "id",
                        href: `${siteUrl}/id`
                    }, void 0, false, {
                        fileName: "[project]/artifacts/stockity-web/app/(en)/layout.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "alternate",
                        hrefLang: "x-default",
                        href: siteUrl
                    }, void 0, false, {
                        fileName: "[project]/artifacts/stockity-web/app/(en)/layout.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify(jsonLd)
                        }
                    }, void 0, false, {
                        fileName: "[project]/artifacts/stockity-web/app/(en)/layout.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/artifacts/stockity-web/app/(en)/layout.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$2$2e$9_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
                className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$nunito_sans_99c2e9e$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].variable} font-[family-name:var(--font-nunito-sans)]`,
                children: children
            }, void 0, false, {
                fileName: "[project]/artifacts/stockity-web/app/(en)/layout.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/artifacts/stockity-web/app/(en)/layout.tsx",
        lineNumber: 133,
        columnNumber: 5
    }, this);
}
}),
"[project]/artifacts/stockity-web/app/(en)/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/artifacts/stockity-web/app/(en)/layout.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=artifacts_stockity-web_app_%28en%29_layout_tsx_1u2lxr2._.js.map