module.exports = [
"[project]/artifacts/stockity-web/app/id/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>IdLayout,
    "metadata",
    ()=>metadata
]);
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || (process.env.REPLIT_DOMAINS ? `https://${process.env.REPLIT_DOMAINS.split(",")[0]}` : "https://stockity.id");
const title = "Stockity - Login & Daftar | Aplikasi Trading Resmi";
const description = "Login atau daftar akun Stockity dan akses aplikasi trading resmi. Jelajahi opsi digital, berbagai aset, dan pengalaman trading yang mudah.";
const metadata = {
    title: {
        default: title,
        template: "%s | Stockity"
    },
    description,
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
                alt: "Stockity — Investasi yang Lebih Jelas"
            }
        ]
    },
    alternates: {
        canonical: "/id",
        languages: {
            en: "/",
            id: "/id",
            "x-default": "/"
        }
    }
};
function IdLayout({ children }) {
    return children;
}
}),
"[project]/artifacts/stockity-web/app/id/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/artifacts/stockity-web/app/id/layout.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=artifacts_stockity-web_app_id_layout_tsx_1ua0iqw._.js.map