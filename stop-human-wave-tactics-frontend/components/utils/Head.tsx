import React from "react";
import Head from "next/head";

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
      <meta property="og:site_name" content={title} />
      <meta name="keywords" content={keyword} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Head>
  );
};

export default Meta;

