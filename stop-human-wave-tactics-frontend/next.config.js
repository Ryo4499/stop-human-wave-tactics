/** @type {import('next').NextConfig} */
module.exports = {
  output: "build",
  reactStrictMode: true,
  crossOrigin: "anonymous",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["localhost", "back", process.env.DOMAIN],
    path: "images",
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
