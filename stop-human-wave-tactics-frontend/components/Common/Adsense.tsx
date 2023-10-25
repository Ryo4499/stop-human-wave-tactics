import Script from "next/script";

export const DefaultAdsense = () => {
    return (
        <>
            <Script id="adsense1" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5108510865994427"
                strategy="worker" />
            <ins className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client="ca-pub-5108510865994427"
                data-ad-slot="3235537736"
                data-ad-format="auto"
                data-full-width-responsive="true" />
            <Script id="adsense2">
                {`(adsbygoogle = window.adsbygoogle || []).push({ })`}
            </Script>
        </>
    )
}
