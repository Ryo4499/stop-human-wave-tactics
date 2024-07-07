import Document, { Head, Html, NextScript, Main } from "next/document";
import Script from "next/script";
import { adsenseEnabled, getGadId, getGanId } from "../lib/google";
import { prod } from "../lib/graphqlClient";
import { GoogleAnalytics } from "@next/third-parties/google";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="google-adsense-account" content={getGadId()} />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"
            integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/github-dark-dimmed.min.css"
            crossOrigin="anonymous"
          />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1.0,minimum-scale=1.0"
          />
          <meta property="og:type" content="blog" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@ar4499_" />
          <meta httpEquiv="Expires" content={`${new Date().toString()}`} />
          <meta httpEquiv="Cache-Control" content="no-store max-age=0" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="#000" />
          <meta name="apple-mobile-web-app-title" content="shwt" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-config" content="/browserconfig.xml" />
          <meta name="theme-color" content="#ffffff" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicons/shwt_180x180.webp"
          />
          <meta name="application-name" content="shwt" />
          <meta name="theme-color" content="#000" />
          <meta name="description" content="This is ar44's tech blog" />
          <link
            rel="icon"
            sizes="16x16"
            href="/static/images/shwt_16x16.webp"
          />
          <link
            rel="icon"
            sizes="32x32"
            href="/static/images/shwt_32x32.webp"
          />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          {adsenseEnabled() && (
            <>
              <script
                async
                src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${getGadId()}`}
              />
              <script
                async
                src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
              />
              <Script
                id="gpt-head"
                dangerouslySetInnerHTML={{
                  __html: `window.googletag = window.googletag || { cmd: [] };`,
                }}
              />
              <script
                async
                custom-element="amp-ad"
                src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"
              />
            </>
          )}
          {prod && <GoogleAnalytics gaId={`${getGanId()}`} />}
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
