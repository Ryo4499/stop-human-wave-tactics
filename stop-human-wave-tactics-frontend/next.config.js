module.exports = {
  async rewrites() {
    return [
      // we need to define a no-op rewrite to trigger checking
      // all pages/static files before we attempt proxying
      {
        source: '/uploads/:path*',
        destination:
          'http://back:${BACK_PORT}/uploads/:path*',
      },
    ]
  },
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    domains: ['localhost', 'back', '${DOMAIN}'],
  },
  i18n: {
    locales: ['en', 'ja'],
    defaultLocale: 'ja',
  },
  trailingSlash: false,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  experimental: {
    scrollRestoration: true,
  },
};
