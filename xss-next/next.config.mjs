/** @type {import('next').NextConfig} */
const nextConfig = {
    //async headers() {
    //    return [
    //        {
    //            source: "/(.*)",
    //            headers: [
    //                // Show that CSP helps even if a bug slips in
    //                {
    //                    key: "Content-Security-Policy",
    //                    value: [
    //                        "default-src 'self'",
    //                        "script-src 'self'",            // avoid 'unsafe-inline'
    //                        "style-src 'self' 'unsafe-inline'",
    //                        "img-src 'self' data:",
    //                        "object-src 'none'",
    //                        "base-uri 'self'",
    //                        "frame-ancestors 'none'",
    //                    ].join("; "),
    //                },
    //                { key: "X-Content-Type-Options", value: "nosniff" },
    //                { key: "Referrer-Policy", value: "no-referrer" },
    //            ],
    //        },
    //    ];
    //},
};

export default nextConfig;
