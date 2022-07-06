import Articles from "../components/Article/Articles";
import Grid from "@mui/material/Grid";
import React from "react";
import type { InferGetStaticPropsType } from "next";

export async function getStaticProps() {
        return {
                //ここにAPIから記事一覧を取得
                props: {
                        articles: getArticles()
                },
                // ISR
                revalidate: 4 * 60 * 60,
        };
}

//記事のTYPE
type Props = {
        time: string;
}

//引数はpropsの変数名に合わせる
export default function App({
        time,
}: InferGetStaticPropsType<typeof getStaticProps>) {
        return (
                <Grid>
                        <h1>{time}</h1>
                        <Articles articles={articles}></Articles>
                </Grid>
        );
}
