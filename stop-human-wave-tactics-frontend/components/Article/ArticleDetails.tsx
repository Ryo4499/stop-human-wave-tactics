import { useRouter } from "next/router";
import {
  ArticleEntityResponseCollection,
} from "../../types/apollo_client";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";
import MdContent from "../Common/MdContent";

type ArticleProps = {
  uuid: string;
};

export const ArticleDetails = ({ articles }: { articles: ArticleEntityResponseCollection }) => {
  const router = useRouter()

  if (articles?.data[0]?.attributes != null) {
    const article = articles.data[0]?.attributes;
    return (
      <Grid container xs={12} sx={{ flexGrow: 1 }}>
        <Grid container direction="column" sx={{ flexGrow: 1 }}>
          <Grid>
            <Typography variant="h1">
              {article.title}
            </Typography></Grid>
          <Grid>
            <MdContent content={article.content}></MdContent>
          </Grid>
        </Grid>
      </Grid>
    );
  } else {
    return null
  }
};
