/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: `https://${process.env.DOMAIN}`,
    generateRobotsTxt: true,
    changefreq: "monthly",
    sitemapSize: 7000,
    exclude: ["/admin"],
}