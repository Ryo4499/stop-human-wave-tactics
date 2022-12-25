/*
  eslint-disable
  @typescript-eslint/no-var-requires,
  @typescript-eslint/explicit-function-return-type,
  @type {import('next').NextConfig}
*/
import resolve from "path"
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'ja'],
    defaultLocale: 'ja',
  },
  domains: [
    {
      domain: 'localhost/en',
      defaultLocale: 'en',
      http: true,
    },
    {
      domain: 'localhost/ja',
      defaultLocale: 'ja',
      http: true,
    },
  ],
};

export default nextConfig
