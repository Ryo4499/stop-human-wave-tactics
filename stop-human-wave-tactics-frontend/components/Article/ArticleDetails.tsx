import {
  ArticleEntityResponseCollection,
} from "../../types/graphql_res";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";
import { useLocale } from "../../lib/locale";
import FolderIcon from '@mui/icons-material/Folder';
import MdContent from "../Common/MdContent";
import Link from "next/link";

type ArticleProps = {
  uuid: string;
};

export const ArticleDetails = ({ articles }: { articles: ArticleEntityResponseCollection }) => {
  const { locale, locales, t } = useLocale()

  if (articles?.data[0]?.attributes != null) {
    const article = articles.data[0]?.attributes;
    return (
      <Grid container direction="column" xs={12} sx={{ flexGrow: 1, }}>
        <Grid container direction="column" sx={{ flexGrow: 1, backgroundColor: "background.content", mx: { md: 5, xs: 0 }, my: { md: 0, xs: 3 } }} justifyContent="space-between">
          <Grid container direction="column" my={2} mx={5}>
            <Grid >
              <Typography variant="h2" color={"text.primary"}>
                {article.title}
              </Typography>
            </Grid>
            <Grid container direction="row" my={2} justifyContent="space-between" alignContent="center" alignItems="center">
              {
                article.category?.data?.attributes?.uuid != null ?
                  <Grid container direction="row" sx={{ color: "text.link" }} spacing={1} alignContent="center" alignItems="center">
                    <Grid >
                      <FolderIcon sx={{ color: "text.secondary" }} />
                    </Grid>
                    <Grid >
                      <Link href={{ pathname: `/category/${article.category.data.attributes.uuid}`, query: { name: article.category.data.attributes.name } }}>
                        <Typography variant="subtitle1" color="text.link">
                          {article.category?.data?.attributes?.name}
                        </Typography>
                      </Link>
                    </Grid>
                  </Grid> :
                  null
              }
              <Grid textAlign={"right"}>
                <Typography variant="body1" color={"text.secondary"} >
                  {t.updated_at}: {article.updatedAt
                    .replace("T", " ")
                    .replace(/\..*$/g, "")
                    .replace(/\-/g, "/")
                  }
                </Typography>
                <Typography variant="body1" color={"text.secondary"} >
                  {t.created_at}: {article.createdAt
                    .replace("T", " ")
                    .replace(/\..*$/g, "")
                    .replace(/\-/g, "/")
                  }
                </Typography>
              </Grid>
            </Grid>
            <Grid container direction="row">
              <MdContent content={article.content}></MdContent>
            </Grid>
          </Grid>
        </Grid>
      </Grid >
    );
  } else {
    return null
  }
};
