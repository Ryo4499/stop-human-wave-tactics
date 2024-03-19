import React from "react";
import Head from "next/head";
import { getProxyURL } from "../../lib/graphqlClient";

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
      <meta name="keywords" content={keyword} />
      <meta property="og:type" content="blog" />
      <meta property="og:url" content={getProxyURL()} />
      <meta property="og:site_name" content={title} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@ar4499_" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta http-equiv="Expires" content={`${new Date().toString()}`} />
      <meta http-equiv="Cache-Control" content="public, max-age=0" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <link rel="canonical" href={getProxyURL()} />
      <link rel="icon" type="image/x-icon" href="/staic/images/favicon.ico" sizes="any" />
      <link rel="icon" type="image/jpg" sizes="32x32" href="/staic/images/favicon_32x32.jpg" />
      <link rel="icon" type="image/jpg" sizes="16x16" href="/staic/images/favicon_16x16.jpg" />
      <link rel="apple-touch-icon" href={getProxyURL()} />
    </Head>
  );
};

export default Meta;

