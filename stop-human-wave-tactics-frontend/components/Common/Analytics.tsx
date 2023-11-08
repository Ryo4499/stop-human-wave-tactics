import { usePathname, useSearchParams } from 'next/navigation'
import Script from 'next/script'
import { useEffect } from 'react'
import { GA_TRACKING_ID, pageview } from '../../lib/gtag'

const GoogleAnalytics = () => {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        if (GA_TRACKING_ID !== "") {
            return
        }
        const url = pathname + searchParams.toString()
        pageview(url)
    }, [pathname, searchParams])

    return (
        <>
            <Script
                strategy='afterInteractive'
                async
                id={GA_TRACKING_ID}
                src="https://www.googletagmanager.com/gtag/js"
            />
            <Script id='gtag-init' async strategy='afterInteractive'>
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
        `}
            </Script>
        </>
    )
}

export default GoogleAnalytics