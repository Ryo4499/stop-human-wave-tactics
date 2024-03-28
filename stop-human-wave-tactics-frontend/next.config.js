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

// Injected content via Sentry wizard below

const { withSentryConfig } = require("@sentry/nextjs");

module.exports = withSentryConfig(
  module.exports,
  {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    // Suppresses source map uploading logs during build
    silent: true,
    org: "ar4499",
    project: "datsujinkai-frontend",
  },
  {
    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Transpiles SDK to be compatible with IE11 (increases bundle size)
    transpileClientSDK: true,

    // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers. (increases server load)
    // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
    // side errors will fail.
    tunnelRoute: "/monitoring",

    // Hides source maps from generated client bundles
    hideSourceMaps: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,

    // Enables automatic instrumentation of Vercel Cron Monitors.
    // See the following for more information:
    // https://docs.sentry.io/product/crons/
    // https://vercel.com/docs/cron-jobs
    automaticVercelMonitors: true,
  }
);
