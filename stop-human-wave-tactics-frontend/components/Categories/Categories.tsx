import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Link from "next/link";
import FolderIcon from "@mui/icons-material/Folder";
import Grid from "@mui/material/Unstable_Grid2";
import { useLocale } from "../../lib/locale";
import { Article } from "../../types/graphql_res";

export const Categories = ({ contents }) => {
  const { locale, locales, t } = useLocale();

  if (contents.data.length === 0) {
    return null;
  } else {
    const Content = (
      <List disablePadding>
        {contents.data.map((content) => {
          if (
            content.attributes?.uuid != null &&
            content.attributes?.articles?.data.length !== 0
          ) {
            return (
              <ListItem
                sx={{ pl: 4, py: 0.5 }}
                key={content.attributes?.uuid}
                disablePadding
              >
                <Link
                  href={{
                    pathname: `/category/${content.attributes?.uuid}`,
                    query: { name: content.attributes.name },
                  }}
                >
                  <Typography color="text.link">
                    {content.attributes?.name} (
                    {content.attributes?.articles?.data.length})
                  </Typography>
                </Link>
              </ListItem>
            );
          } else {
            return null;
          }
        })}
      </List>
    );
    return (
      <Stack my={1}>
        <Typography my={1} variant="subtitle1" color="text.primary">
          {t.categories}
        </Typography>
        {Content}
      </Stack>
    );
  }
};

export const CategoryLinkComponent = ({ article }: { article: Article }) => {
  if (article.category?.data != null) {
    return (
      <Grid
        container
        direction="row"
        sx={{ color: "text.link" }}
        justifyContent="flex-end"
        alignItems="center"
      >
        <Grid container mx={1}>
          <FolderIcon sx={{ color: "text.secondary", fontSize: "2.2vh" }} />
        </Grid>
        <Grid container>
          <Link
            href={{
              pathname: `/category/${article.category.data.attributes?.uuid}`,
              query: { name: article.category.data.attributes?.name },
            }}
          >
            <Typography sx={{ fontSize: "1.0rem" }} color="text.link">
              {article.category.data.attributes?.name}
            </Typography>
          </Link>
        </Grid>
      </Grid>
    );
  } else {
    return null;
  }
};
