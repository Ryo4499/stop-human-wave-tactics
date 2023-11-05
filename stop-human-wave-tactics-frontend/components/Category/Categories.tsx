import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Link from "next/link";
import { useLocale } from "../../lib/locale";
import { CategoriesProps } from "../../types/general";

export const Categories = ({ categories }: CategoriesProps) => {
  const { locale, locales, t } = useLocale();
  const CategoriesContent = (
    <List disablePadding>
      {categories.data.map((category) => {
        if (category.attributes?.uuid != null) {
          return (
            <ListItem sx={{ pl: 4 }} key={category.id} disablePadding>
              <Link
                href={{
                  pathname: `/category/${category.attributes.uuid}`,
                  query: { name: category.attributes.name },
                }}
              >
                <Typography color="text.link">
                  {category.attributes?.name} (
                  {category.attributes?.articles?.data.length})
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

  if (categories.data.length === 0) {
    return null;
  } else {
    return (
      <>
        <List>
          <ListItem sx={{ my: 1 }} disablePadding>
            <Typography variant="subtitle1" color="text.primary">
              {t.categories}
            </Typography>
          </ListItem>
          {CategoriesContent}
        </List>
      </>
    );
  }
};
