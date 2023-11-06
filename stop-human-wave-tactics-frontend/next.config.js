/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  crossOrigin: "anonymous",
  typescript: {
    ignoreBuildErrors: true,
  },
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
    return config;
  },
  experimental: {
    scrollRestoration: false,
  },
};
