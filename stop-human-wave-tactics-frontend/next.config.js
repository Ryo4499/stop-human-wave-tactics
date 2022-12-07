/*
  eslint-disable
  @typescript-eslint/no-var-requires,
  @typescript-eslint/explicit-function-return-type,
  @type {import('next').NextConfig}
*/

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "ja"],
    defaultLocale: "ja",
  },
  domains: [
    {
      domain: "localhost",
    },
  ],
};

export default nextConfig
