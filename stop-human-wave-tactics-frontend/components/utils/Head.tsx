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
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <link rel="shortcut icon" href="/static/images/favicon.ico" />
      {
        getMode() === "PRODUCTION" && <GoogleAnalytics gaId={`${getGtag()}`} />
      }
    </Head>
  );
};

export default Meta;

