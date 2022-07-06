import { NextPage, GetStaticPaths, GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
        const slug = params.slug;
        const { article } = await getArticle({ slug });
        return {
                //ここにAPIから記事一覧を取得
                props: {
                        slug,
                        article
                },
                // ISR
                revalidate: 4 * 60 * 60,
        };
}

export const getStaticPaths: GetStaticPaths = async () => {
        return {
                paths: [],
                fallback: 'blocking',
        }
}


export default (props: Props) => {
        return (
                <div></div>
        )
}
