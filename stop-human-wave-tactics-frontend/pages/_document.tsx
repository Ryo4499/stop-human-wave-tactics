import Document, {
  Head,
  Html,
  NextScript,
  Main,
} from "next/document";
import { getGaId } from "../lib/google";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="google-adsense-account" content={getGaId()} />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css" integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X" crossOrigin="anonymous" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/github-dark-dimmed.min.css" integrity="sha512-zcatBMvxa7rT7dDklfjauWsfiSFParF+hRfCdf4Zr40/MmA1gkFcBRbop0zMpvYF3FmznYFgcL8wlcuO/GwHoA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
          <script async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${getGaId()}`} crossOrigin="anonymous" />
          <script custom-element="amp-auto-ads" src="https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js" />
        </Head>
        <body>
          <amp-auto-ads type="adsense"
            data-ad-client={getGaId()}>
          </amp-auto-ads>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
