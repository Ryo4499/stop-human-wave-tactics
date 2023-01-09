module.exports = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true
  },
  env: {
    PAGESIZE: 2,
    NEXT_PUBLIC_BACKEND_URL: `http://${process.env.DOMAIN}/graphql`
  },
  i18n: {
    locales: ['en', 'ja'],
    defaultLocale: 'ja',
    domains: [
      {
        domain: `${process.env.DOMAIN || "localhost"}/en`,
        defaultLocale: 'en',
        http: true,
      },
      {
        domain: `${process.env.DOMAIN || "localhost"}/ja`,
        defaultLocale: 'ja',
        http: true,
      },
    ],
  },
};
