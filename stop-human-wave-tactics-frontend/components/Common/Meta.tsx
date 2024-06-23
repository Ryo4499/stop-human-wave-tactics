import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { getDomain } from "../../lib/graphqlClient";

interface Props {
  title: string | undefined;
  description: string | undefined;
}

const Meta = ({ title, description }: Props): React.ReactNode => {
  const router = useRouter();
  const currentUrl = router.asPath;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} key="title" />
      <meta property="og:description" content={description} key="description" />
      <meta property="og:site_name" content={title} key={getDomain()} />
      <link rel="canonical" href={"https://" + getDomain() + currentUrl} />
    </Head>
  );
};

export default Meta;
