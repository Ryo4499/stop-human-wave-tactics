import Articles from "../components/Article/Articles";
import Grid from "@mui/material/Grid";
import type { InferGetStaticPropsType } from "next";

export async function getStaticProps() {
        const products = [1, 2, 3];

        return {
                props: {
                        products,
                },
                revalidate: 4 * 60 * 60,
        };
}

export default function App({
        products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
        return (
                <Articles></Articles>
        );
}
