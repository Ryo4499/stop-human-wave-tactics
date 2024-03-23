import React from "react";
import Head from "next/head";
import { GoogleAnalytics } from "@next/third-parties/google";
import { getDomain, getMode } from "../../lib/graphqlClient";
import { getGtag } from "../../lib/google";

interface Props {
  title: string;
  description: string;
  keyword: string;
}

const Meta = ({ title, description, keyword }: Props): React.ReactNode => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="blog" />
      <meta property="og:url" content={`https://${getDomain()}`} />
      <meta property="og:site_name" content={title} />
      <meta name="keywords" content={keyword} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@ar4499_" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta httpEquiv="Expires" content={`${new Date().toString()}`} />
      <meta httpEquiv="Cache-Control" content="no-store max-age=0" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#000" />
      <meta name="apple-mobile-web-app-title" content="shwt" />
      <link
        rel="apple-touch-icon"
        sizes="150x150"
        href="/static/images/favicon_150x150.jpg"
      />
      <meta name="application-name" content="shwt" />
      <meta name="theme-color" content="#000" />
      <meta name="description" content="This is ar44's tech blog" />
      <link rel="icon" sizes="192x192" href="/static/images/favicon_192x192.jpg" />
      <link rel="shortcut icon" href="/static/images/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
      {
        getMode() === "PRODUCTION" && <GoogleAnalytics gaId={`${getGtag()}`} />
      }
    </Head>
  );
};

export default Meta;

