import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Link from "next/link";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import Grid from "@mui/material/Unstable_Grid2";
import { useLocale } from "../../lib/locale";
import { Article, TagEntityResponseCollection } from "../../types/graphql_res";

interface TagsProps {
  contents: TagEntityResponseCollection;
}

export const Tags = ({ contents }: TagsProps) => {
  const { t } = useLocale();

  if (contents.data.length === 0) {
    return null;
  } else {
    const Content = (
      <List disablePadding>
        {contents.data.map((content) => {
          if (
            content.id != null &&
            content.attributes?.articles?.data.length !== 0
          ) {
            return (
              <ListItem
                sx={{ pl: 4, py: 0.5 }}
                key={content.id}
                disablePadding
              >
                <Link
                  href={{
                    pathname: `/tag/${content.id}`,
                    query: { name: content.attributes?.name },
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
          {t.tags}
        </Typography>
        {Content}
      </Stack>
    );
  }
};

export const TagsLinkComponent = ({ article }: { article: Article }) => {
  if (article.tags?.data.length !== 0) {
    return (
      <Grid
        container
        direction="row"
        sx={{ color: "text.link" }}
        justifyContent="flex-end"
        alignItems="center"
        my={1}
      >
        <Grid container mx={1}>
          <LocalOfferIcon sx={{ color: "text.secondary", fontSize: "1rem" }} />
        </Grid>
        <Stack direction="column" spacing={0.4} textAlign="right">
          {article.tags?.data.map((tag) => (
            <Link
              key={tag.id}
              href={{
                pathname: `/tag/${tag.id}`,
                query: { name: tag.attributes?.name },
              }}
            >
              <Typography sx={{ fontSize: "1rem" }} color="text.link">
                {tag.attributes?.name}
              </Typography>
            </Link>
          ))}
        </Stack>
      </Grid>
    );
  } else {
    return null;
  }
};
