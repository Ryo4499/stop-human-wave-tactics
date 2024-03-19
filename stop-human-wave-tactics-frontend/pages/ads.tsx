const AdsTxt = () => { }

export const getServerSideProps = async ({ res }) => {
    const adsTxtData = "google.com, pub-5108510865994427, DIRECT, f08c47fec0942fa0"

    res.setHeader("Content-Type", "text/plain")
    res.write(adsTxtData)
    res.end()

    return { props: {} }
}

export default AdsTxt