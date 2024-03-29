import Head from "next/head";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import MdContent from "../Common/MdContent";
import {
  ArticleEntityResponseCollection,
} from "../../types/graphql_res";
import { useLocale } from "../../lib/locale";
import { Adsense } from "../Common/Adsense";
import { CategoryLinkComponent } from "../Categories/Categories";
import { TagsLinkComponent } from "../Tags/Tags";
import { adsenseEnabled } from "../../lib/google";
import Meta from "../Common/Meta";
import { MetaSocial } from "../Common/MetaSocial";

export const ArticleDetails = ({ articles }: { articles: ArticleEntityResponseCollection }) => {

  const { locale, locales, t } = useLocale()

  if (articles?.data[0]?.attributes != null) {
    const article = articles.data[0]?.attributes;
    return (
      <Grid direction="column" justifyContent={"center"} my={2} xs={12} sx={{ mx: { xs: 2, sm: 5 }, px: { xs: 2, sm: 5 }, flexGrow: 1, backgroundColor: "background.content" }}>
        <Meta title={article.seo?.metaTitle} description={article.seo?.metaDescription} />
        {
          article.seo?.metaSocial?.map((metaSocial) => {
            return <Head key={metaSocial?.id}>
              <MetaSocial sns={String(metaSocial?.socialNetwork)} title={String(metaSocial?.title)} description={String(metaSocial?.description)} image={String(metaSocial?.image?.data?.attributes?.previewUrl)} />
            </Head>
          })
        }
        <Head>
          <meta name="robots" content={String(article.seo?.metaRobots)} key="robots" />
          <meta name="keywords" content={String(article.seo?.keywords)} key="keywords" />
        </Head>
        <Grid>
          <Typography py={2} sx={{ fontSize: "2.0rem" }} color={"text.primary"}>
            {article.title}
          </Typography>
        </Grid>
        <Grid direction="row" my={2} alignContent="center" alignItems="center">
          {
            article.category?.data != null ? <CategoryLinkComponent article={article} /> : null
          }
          {
            article.tags?.data.length !== 0 ? <TagsLinkComponent article={article} /> : null
          }
          <Grid textAlign={"right"} my={2}>
            <Typography sx={{ fontSize: "0.9rem" }} color={"text.secondary"} >
              {t.updated_at}: {article.updatedAt}
            </Typography>
            <Typography sx={{ fontSize: "0.9rem" }} color={"text.secondary"} >
              {t.created_at}: {article.createdAt}
            </Typography>
          </Grid>
        </Grid>
        <Grid direction="row" py={2}>
          <MdContent content={article.content}></MdContent>
          {
            adsenseEnabled() &&
            <Adsense style={{ display: "block", textAlign: "center", width: "80vw", height: "40vh" }} format="fluid" slot="4924859350" fullWidth="true" adStatus="filled" key="+3f+qw+4f-n8+fw" />
          }
        </Grid>
      </Grid>
    );
  } else {
    return null
  }
};
