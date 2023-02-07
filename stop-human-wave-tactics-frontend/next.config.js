module.exports = {
  async rewrites() {
    return [
      // we need to define a no-op rewrite to trigger checking
      // all pages/static files before we attempt proxying
      {
        source: '/uploads/:path*',
        destination:
          'http://back:1337/uploads/:path*',
      },
    ]
  },
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true
  },
  env: {
    PAGESIZE: 6,
    //NEXT_PUBLIC_BACKEND_URL: "http://localhost/graphql",
    NEXT_PUBLIC_BACKEND_URL: "http://back:1337",
    PROXY_URL: "http://localhost",
  },
  images: {
    domains: ['localhost', 'back'],
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
