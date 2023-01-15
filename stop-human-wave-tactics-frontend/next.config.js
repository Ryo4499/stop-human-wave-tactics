module.exports = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true
  },
  env: {
    PAGESIZE: 6,
    //NEXT_PUBLIC_BACKEND_URL: `${process.env.NEXT_PUBLIC_BACKEND_URL}`
    NEXT_PUBLIC_BACKEND_URL: "http://localhost/graphql",
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
};
