import Document, {
  Head,
  Html,
  NextScript,
  Main,
} from "next/document";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css" integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X" crossOrigin="anonymous" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/github-dark-dimmed.min.css" integrity="sha512-zcatBMvxa7rT7dDklfjauWsfiSFParF+hRfCdf4Zr40/MmA1gkFcBRbop0zMpvYF3FmznYFgcL8wlcuO/GwHoA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
          <script id="google_adsense" src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.GA_ID}`} crossOrigin="anonymous" />
        </Head>
        <body>
          <Main />
          <NextScript />
          {
            process.env.MODE !== "DEV" && <GoogleAnalytics gaId={`${process.env.GTAG}`} />
          }
          {
            process.env.MODE !== "DEV" && <GoogleTagManager gtmId={`${process.env.GTM_ID}`} />
          }
        </body>
      </Html>
    );
  }
}

export default MyDocument;
