import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import FolderIcon from '@mui/icons-material/Folder';
import MdContent from "../Common/MdContent";
import Link from "next/link";
import {
  ArticleEntityResponseCollection,
} from "../../types/graphql_res";
import { useLocale } from "../../lib/locale";
import { Adsense } from '@ctrl/react-adsense';
import { prod } from "../../lib/graphqlClient";
import { getGaId } from "../../lib/google";

const CategoryLinkComponent = ({ article }) => {
  if (article.category?.data?.attributes?.uuid == null) {
    return null
  }
  return (
    <Grid container direction="row" sx={{ color: "text.link" }} justifyContent="flex-end" alignItems="center">
      <Grid container mx={1}>
        <FolderIcon sx={{ color: "text.secondary", fontSize: "3vh" }} />
      </Grid>
      <Grid container>
        <Link href={{ pathname: `/category/${article.category.data?.attributes?.uuid}`, query: { name: article.category.data.attributes.name } }}>
          <Typography sx={{ fontSize: "1.0rem" }} color="text.link">
            {article.category?.data?.attributes?.name}
          </Typography>
        </Link>
      </Grid>
    </Grid>)
}

export const ArticleDetails = ({ articles }: { articles: ArticleEntityResponseCollection }) => {

  const { locale, locales, t } = useLocale()

  if (articles?.data[0]?.attributes != null) {
    const article = articles.data[0]?.attributes;
    return (
      <Grid direction="column" justifyContent={"center"} my={2} px={5} mx={5} xs={12} sx={{ flexGrow: 1, backgroundColor: "background.content" }}>
        <Grid>
          <Typography py={2} sx={{ fontSize: "2.0rem" }} color={"text.primary"}>
            {article.title}
          </Typography>
        </Grid>
        <Grid direction="row" my={2} alignContent="center" alignItems="center">
          <CategoryLinkComponent article={article} />
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
            <Grid className="adsbygoogle" container my={2} xs={12} >
              <Adsense style={{ display: "block", textAlign: "center" }} adTest={prod ? "off" : "on"} client={getGaId()} format="fluid" slot="7513378149" key="in-article" />
            </Grid>
          }
        </Grid>
      </Grid>
    );
  } else {
    return null
  }
};
