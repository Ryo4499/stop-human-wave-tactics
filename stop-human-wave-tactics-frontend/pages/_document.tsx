import Document, {
  Head,
  Html,
  NextScript,
  Main,
} from "next/document";
import Script from "next/script"
import { GA_ID } from "../lib/gad";
import GoogleAnalytics from "../components/Common/Analytics";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="google-adsense-account" content={GA_ID} />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css" integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X" crossOrigin="anonymous" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/github-dark-dimmed.min.css" integrity="sha512-zcatBMvxa7rT7dDklfjauWsfiSFParF+hRfCdf4Zr40/MmA1gkFcBRbop0zMpvYF3FmznYFgcL8wlcuO/GwHoA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Script id="google_adsense" data-ad-client={GA_ID} async strategy="beforeInteractive" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
          <GoogleAnalytics />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
