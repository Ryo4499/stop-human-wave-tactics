module.exports = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true
  },
  env: {
    PAGESIZE: 2,
    //NEXT_PUBLIC_BACKEND_URL: `${process.env.NEXT_PUBLIC_BACKEND_URL}`
    NEXT_PUBLIC_BACKEND_URL: "http://localhost/graphql",
    HTTP_PROXY: "http://localhost/graphql"
  },
  i18n: {
    locales: ['en', 'ja'],
    defaultLocale: 'ja',
  },
  trailingSlash: false
};
