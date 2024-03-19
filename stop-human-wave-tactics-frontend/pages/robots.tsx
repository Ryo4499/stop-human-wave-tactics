const RobotsTxt = () => { }

export const getServerSideProps = async ({ res }) => {
  // GENERATE ROBOT DATA
  const robotsTxtData = `User-agent: *\nDisallow: /admin/\nAllow: /`

  res.setHeader("Content-Type", "text/plain")
  res.write(robotsTxtData)
  res.end()

  return { props: {} }
}

export default RobotsTxt