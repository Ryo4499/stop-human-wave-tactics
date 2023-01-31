import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "next/link";
import { useLocale } from "../../lib/locale";
import { CategoryEntity, CategoryEntityResponseCollection } from "../../types/apollo_client";
import { CategoriesProps } from "../../types/general";
import { DisplayError } from "../Common/DisplayError";

export const Categories = ({ categories }: CategoriesProps) => {
  const { locale, locales, t } = useLocale()

  const CategoriesContent = <Grid>
    {categories.data.map(category => {
      if (category.attributes?.uuid != null) {
        return <Grid key={category.id} >
          <Link href={`/category/${category.attributes?.uuid}`} >
            <Typography color="text.secondary">
              {category.attributes?.name} ({category.attributes?.articles?.data.length})
            </Typography>
          </Link>
        </Grid>
      } else {
        return null
      }
    })}
  </Grid>

  if (categories.data.length === 0) {
    return (
      null
    )
  } else {
    return (<>
      <Grid container direction="row" py={0.5}>
        <Grid container xs={12} py={0.5}>
          <Typography color="text.primary">{t.categories}</Typography>
        </Grid>
        <Grid container xs={1}></Grid>
        <Grid container xs={11}>
          {CategoriesContent}
        </Grid>
      </Grid>
    </>
    )
  }
};

