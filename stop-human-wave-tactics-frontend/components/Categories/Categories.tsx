import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Link from "next/link";
import { useLocale } from "../../lib/locale";

export const Categories = ({ contents }) => {
  const { locale, locales, t } = useLocale();

  if (contents.data.length === 0) {
    return null;
  } else {
    const Content = (
      <List disablePadding>
        {contents.data.map((content) => {
          if (content.attributes?.uuid != null && content.attributes?.articles?.data.length !== 0) {
            return (
              <ListItem sx={{ pl: 4, py: 0.5 }} key={content.attributes?.uuid} disablePadding>
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
}
