import { useRouter } from "next/router";
import {
  ArticleEntityResponseCollection,
} from "../../types/graphql_res";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";
import { useLocale } from "../../lib/locale";
import MdContent from "../Common/MdContent";

type ArticleProps = {
  uuid: string;
};

export const ArticleDetails = ({ articles }: { articles: ArticleEntityResponseCollection }) => {
  const { locale, locales, t } = useLocale()

  if (articles?.data[0]?.attributes != null) {
    const article = articles.data[0]?.attributes;
    return (
      <Grid container xs={12} sx={{ flexGrow: 1 }}>
        <Grid container direction="column" sx={{ flexGrow: 1, backgroundColor: "background.content" }} mx={5}>
          <Grid m={3}>
            <Grid container justifyContent="space-between">
              <Grid container>
                <Typography variant="h2" color={"text.primary"}>
                  {article.title}
                </Typography>
              </Grid>
              <Stack>
                <Typography variant="body1" color={"text.secondary"} align="right">
                  {t.updated_at}: {article.updatedAt
                    .replace("T", " ")
                    .replace(/\..*$/g, "")
                    .replace(/\-/g, "/")
                  }
                </Typography>
                <Typography variant="body1" color={"text.secondary"} align="right">
                  {t.created_at}: {article.createdAt
                    .replace("T", " ")
                    .replace(/\..*$/g, "")
                    .replace(/\-/g, "/")
                  }
                </Typography>
              </Stack>
            </Grid>
            <Grid container>
              <Typography variant="body1" color={"text.secondary"} >
                <MdContent content={article.content}></MdContent>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  } else {
    return null
  }
};
