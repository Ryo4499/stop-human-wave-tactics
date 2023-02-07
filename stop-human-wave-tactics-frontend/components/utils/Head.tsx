import React from 'react';
import Head from 'next/head';
import path from "path"
import { getProxyURL } from '../../lib/graphqlClient';

interface Props {
    title: string;
    description: string;
    keyword: string;
}

const Meta = ({ title, description, keyword }: Props): JSX.Element => {
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
            <link rel="canonical" href={getProxyURL()} />
            <link rel="shortcut icon" href={path.join(getProxyURL(), "favicon.ico")} />
            <link rel="apple-touch-icon" href={getProxyURL()} />
            <script async
                src="https://www.googletagmanager.com/gtag/js?id=G-884NEPFPMJ"
            />
            <script
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          `,
                }}
            />
        </Head>
    );
};

export default Meta