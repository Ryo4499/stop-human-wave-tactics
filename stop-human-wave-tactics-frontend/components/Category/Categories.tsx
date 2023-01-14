import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "next/link";
import { CategoryEntity, CategoryEntityResponseCollection } from "../../types/apollo_client";
import { CategoriesProps } from "../../types/general";
import { DisplayError } from "../Common/DisplayError";

export const Categories = ({ categories }: CategoriesProps) => {
  console.log(categories)
  const CategoriesContent = categories.data.map(category => (
    <Grid key={category.id}>
      <Link href={`/category/${category.attributes?.uuid}`}>{category.attributes?.name} ({category.attributes?.articles?.data.length})</Link>
    </Grid>
  ))
  if (categories.data.length === 0) {
    console.log(true)
    return (
      null
    )
  } else {
    console.log(false)
    return (<>
      <Grid container direction="column">{CategoriesContent}</Grid>
    </>
    )
  }
};

