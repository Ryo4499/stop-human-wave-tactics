const withPWA = require("next-pwa")({ dest: "public" });
module.exports = withPWA({
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
});