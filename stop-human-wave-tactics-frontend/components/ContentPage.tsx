import Grid from "@mui/material/Unstable_Grid2";
import { Articles } from "./Articles";
import { ArticleDetails } from "./Article/ArticleDetails";
import Sidebar from "./Common/Sidebar";
import Meta from "./Common/Meta";
import type { ContentProps } from "../lib/content";

export default function ContentPage({
  articles,
  categories,
  tags,
  detail,
  search,
}: ContentProps) {
  return (
    <Grid container sx={{ flexGrow: 1 }}>
      <Meta
        title={detail ? articles.data[0]?.attributes?.title : "Articles"}
        description="Archived technical articles"
      />
      <Grid container xs={12} md={10}>
        {detail ? (
          <ArticleDetails articles={articles} />
        ) : (
          <Articles articles={articles} filter={search} />
        )}
        {!detail && articles.data.length === 0 && <p>No articles found.</p>}
      </Grid>
      <Grid container xs={12} md={2}>
        <Sidebar categories={categories} tags={tags} />
      </Grid>
    </Grid>
  );
}
