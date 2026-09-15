import { contentProps } from "../lib/content";
import React from "react";

import type { NextPage } from "next";
import { Box, Grid } from "@mui/material";
import { MorseCodeButton } from "../components/MorseCode/MorseCodeButton";
import { MorseCodeOutput } from "../components/MorseCode/MorseCodeOutput";
import { MorseCodeControls } from "../components/MorseCode/MorseCodeControls";
import { MorseCodeTable } from "../components/MorseCode/MorseCodeTable";
import { MorseCodeResetButton } from "../components/MorseCode/MorseCodeResetButton";
import { useMorseCode } from "../hooks/useMorseCode";
import { useLocale } from "../lib/locale";
import Sidebar from "../components/Common/Sidebar";
import { englishMorseCode, japaneseMorseCode } from "../lib/morse-code";
import {
  CategoryEntityResponseCollection,
  GetCategoriesAndTagsQuery,
  TagEntityResponseCollection,
} from "../types/graphql_res";
import { CategoriesAndTagsResponseProps } from "../types/general";
import { GraphqlError } from "../components/Common/DisplayError";
import Meta from "../components/Common/Meta";

export const getServerSideProps = async (context) => {
  const result = await contentProps(context);
  return result;
};

const MorseCodeContent = () => {
  const [state, handlers] = useMorseCode();
  const { t } = useLocale();

  return (
    <Grid
      container
      direction="column"
      xs={12}
      sx={{
        backgroundColor: "background.content",
        px: { xs: 1, sm: 3 },
        mx: { xs: 1, sm: 3 },
        py: { xs: 1, sm: 1 },
        my: { xs: 2, md: 0 },
        flexGrow: 1,
      }}
    >
      <Grid>
        <MorseCodeTable
          morseCode={state.isJapanese ? japaneseMorseCode : englishMorseCode}
        />
      </Grid>
      <Grid>
        <MorseCodeControls state={state} handlers={handlers} />
      </Grid>
      <Grid>
        <Box display="flex" flexDirection="column" alignItems="center" my={4}>
          <MorseCodeButton handlers={handlers} />
        </Box>
      </Grid>
      <Grid>
        <Box display="flex" justifyContent="center" mb={4}>
          <MorseCodeResetButton handlers={handlers} />
        </Box>
      </Grid>
      <Grid>
        <MorseCodeOutput
          input={state.morseInput + state.currentLetter}
          output={state.result}
        />
      </Grid>
    </Grid>
  );
};

const MorseCode: NextPage<CategoriesAndTagsResponseProps> = ({
  categories,
  tags,
  variables,
}) => {
  const data = { categories, tags };
  const error = undefined;
  if (data != null) {
    return (
      <Grid container sx={{ flexGrow: 1 }}>
        <Meta
          title="Morse Code Practice Page"
          description="On this page, you can practice Morse code."
        />
        <Grid container direction="row" sx={{ flexGrow: 1 }}>
          <Grid container xs={12} md={10} sx={{ flexGrow: 1, py: { sm: 3 } }}>
            <MorseCodeContent />
          </Grid>
          <Grid container xs={12} md={2} sx={{ flexGrow: 1 }}>
            <Sidebar categories={data.categories} tags={data.tags} />
          </Grid>
        </Grid>
      </Grid>
    );
  } else {
    return <GraphqlError error={error} />;
  }
};

export default MorseCode;
