const withPWA = require("next-pwa")({ dest: "public" });

/** @type {import('next').NextConfig} */
const nextConfig = {
  //async headers() {
  //  return [
  //    {
  //      source: '/:path*',
  //      headers: [
  //        {
  //          key: "Access-Control-Allow-Origin",
  //          value: "https://datsujinkai.com",
  //        },
  //        {
  //          key: "Access-Control-Allow-Headers",
  //          value: "Conetnt-Type",
  //        },
  //        {
  //          key: "Access-Control-Allow-Methods",
  //          value: "GET",
  //        }
  //        //{
  //        //  key: 'Content-Security-Policy',
  //        //  value: "default-src 'self' datsujinkai.com; script-src 'self' www.googletagmanager.com pagead2.googlesyndication.com datsujinkai.com; style-src 'self' datsujinkai.com cdn.jsdelivr.net cdnjs.cloudflare.com; font-src 'self' cdn.jsdelivr.net cdnjs.cloudflare.com datsujinkai.com; img-src https://*;",
  //        //},
  //      ],
  //    },
  //  ]
  //},
  reactStrictMode: true,
  crossOrigin: "anonymous",
  images: {
    domains: ["localhost", "back", process.env.DOMAIN],
  },
  i18n: {
    locales: ["en", "ja"],
    defaultLocale: "ja",
  },
  trailingSlash: false,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    config.resolve.modules.push("/node_modules")
    return config;
  },
  experimental: {
    scrollRestoration: false,
  },
};

module.exports = process.env.NODE_ENV === "production" ? withPWA(nextConfig) : nextConfig;