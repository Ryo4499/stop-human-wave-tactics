/** @type {import('next').NextConfig} */
module.exports = {
  distDir: 'build',
  reactStrictMode: true,
  crossOrigin: "anonymous",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["localhost", "back", process.env.DOMAIN],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'localhost', // development domain
        port: '',
        pathname: '/storage/**',
      },
      {
        protocol: 'https',
        hostname: 'back', // staging domain
        port: '',
        pathname: '/storage/**',
      },
      {
        protocol: 'https',
        hostname: 'datsujinkai.com', // production domain
        port: '',
        pathname: '/storage/**',
      },
    ],
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
