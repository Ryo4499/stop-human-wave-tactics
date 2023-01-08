import Grid from "@mui/material/Unstable_Grid2";
import { useQuery } from "@apollo/client";
import { GetCategoriesQuery, GetCategoriesQueryVariables } from "../../types/apollo_client";
import { getCategories } from "../../graphql/getCategories";
import { useLocale } from "../../lib/locale";
import Loading from "../Common/Loading";
import DisplayError from "../Common/DisplayError";

const Categories = () => {
  return <Grid container direction="column" sx={{ flexGrow: 1 }}>
  </Grid>;
};

export default Categories;
