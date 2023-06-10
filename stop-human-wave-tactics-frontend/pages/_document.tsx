import Script from "next/script"
import Document, {
  DocumentContext,
  Head,
  Html,
  NextScript,
  Main,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }
  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css" integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X" crossOrigin="anonymous" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/github-dark-dimmed.min.css" integrity="sha512-zcatBMvxa7rT7dDklfjauWsfiSFParF+hRfCdf4Zr40/MmA1gkFcBRbop0zMpvYF3FmznYFgcL8wlcuO/GwHoA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
          <Script
            id="analytics1"
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', ${process.env.GTAG});
          `,
            }}
          />
          <Script id="analytics2" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GTAG}`}
            strategy="worker" />
          <Script id="google_adsense" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5108510865994427"
            strategy="worker" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
