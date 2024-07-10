import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";
import Slider from "@mui/material/Slider";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import RefreshIcon from "@mui/icons-material/Refresh";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useState, useEffect, useCallback, useRef } from "react";
import { request } from "graphql-request";
import useSWR from "swr";
import { useLocale } from "../lib/locale";
import type { NextPage } from "next";
import Sidebar from "../components/Common/Sidebar";
import { englishMorseCode, japaneseMorseCode } from "../lib/morse-code";
import { getCategoriesAndTags } from "../graphql/getCategoriesAndTags";
import { getBackendGraphqlURL } from "../lib/graphqlClient";
import {
  CategoryEntityResponseCollection,
  GetCategoriesAndTagsQuery,
  TagEntityResponseCollection,
} from "../types/graphql_res";
import { CategoriesAndTagsResponseProps } from "../types/general";
import { GraphqlError } from "../components/Common/DisplayError";
import Meta from "../components/Common/Meta";

export const getStaticProps = async ({ locale }) => {
  const variables = {
    categoryFilters: {},
    tagFilters: {},
    categoryPagination: {},
    tagPagination: {},
    categorySort: [],
    tagSort: [],
    locale: locale,
  };
  const result = await request<{
    categories: CategoryEntityResponseCollection;
    tags: TagEntityResponseCollection;
  }>(getBackendGraphqlURL(), getCategoriesAndTags, variables).then(
    (res: GetCategoriesAndTagsQuery) => {
      if (res.categories == null && res.tags == null) {
        return {
          props: {
            categories: null,
            tags: null,
            variables: variables,
          },
          notFound: true,
          revalidate: 3600,
        };
      } else {
        return {
          props: {
            categories: res.categories,
            tags: res.tags,
            variables: variables,
          },
          notFound: false,
          revalidate: 3600,
        };
      }
    },
  );
  return result;
};

const MorseCodeContent = () => {
  const { t } = useLocale();
  const typo = (text: string) =>
    text.split("\n").map((line, key) => (
      <Typography key={key} variant="body1" color="text.secondary">
        {line}
      </Typography>
    ));
  const site_info = typo(t.site_text);
  const [morseInput, setMorseInput] = useState<string>("");
  const [currentLetter, setCurrentLetter] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [dotDuration, setDotDuration] = useState<number>(250);
  const [isJapanese, setIsJapanese] = useState<boolean>(false);
  const audioContext = useRef<AudioContext | null>(null);
  const oscillator = useRef<OscillatorNode | null>(null);
  const pressStartTime = useRef<number>(0);

  const morseCode = isJapanese ? japaneseMorseCode : englishMorseCode;

  const startPress = useCallback(() => {
    pressStartTime.current = new Date().getTime();
    if (!audioContext.current) {
      audioContext.current = new (window.AudioContext ||
        (window as any).webkitAudioContext)();
    }
    oscillator.current = audioContext.current.createOscillator();
    oscillator.current.type = "sine";
    oscillator.current.frequency.setValueAtTime(
      600,
      audioContext.current.currentTime,
    );
    oscillator.current.connect(audioContext.current.destination);
    oscillator.current.start();
  }, []);

  const endPress = useCallback(() => {
    const duration = new Date().getTime() - pressStartTime.current;
    setCurrentLetter((prev) => prev + (duration < dotDuration ? "." : "-"));
    if (oscillator.current) {
      oscillator.current.stop();
    }
  }, [dotDuration]);

  const addLetter = useCallback(() => {
    if (currentLetter) {
      setMorseInput((prev) => prev + currentLetter + " ");
      setCurrentLetter("");
    }
  }, [currentLetter]);

  const updateResult = useCallback(() => {
    const decoded = morseInput
      .trim()
      .split(" ")
      .map((code) => morseCode[code] || "?")
      .join("");
    setResult(decoded);
  }, [morseInput, morseCode]);

  const resetInput = useCallback(() => {
    setMorseInput("");
    setCurrentLetter("");
    setResult("");
  }, []);

  useEffect(() => {
    updateResult();
  }, [morseInput, updateResult]);

  useEffect(() => {
    const timer = setTimeout(addLetter, dotDuration * 3);
    return () => clearTimeout(timer);
  }, [currentLetter, addLetter, dotDuration]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space" && !e.repeat) {
        e.preventDefault();
        startPress();
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault();
        endPress();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [startPress, endPress]);
  const changedDuration = (_, newValue) => {
    setDotDuration(newValue as number);
    resetInput();
  };

  const chunk = <T,>(arr: T[], size: number): T[][] =>
    Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size),
    );

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
      <Grid textAlign="center" sx={{ my: { xs: 2 } }}>
        <Typography color="text.primary" variant="h5" gutterBottom>
          {t.morse_code_table}
        </Typography>
      </Grid>
      <Stack textAlign="center" spacing={3}>
        <Grid>
          <Paper elevation={3}>
            <TableContainer>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell
                      variant="head"
                      align="justify"
                      sx={{ fontSize: "1.0rem" }}
                    >
                      {t.morse_code_column_char}
                    </TableCell>
                    <TableCell
                      variant="head"
                      align="justify"
                      sx={{ fontSize: "1.0rem" }}
                    >
                      {t.morse_code_column_code}
                    </TableCell>
                    <TableCell
                      variant="head"
                      align="justify"
                      sx={{ fontSize: "1.0rem" }}
                    >
                      {t.morse_code_column_char}
                    </TableCell>
                    <TableCell
                      variant="head"
                      align="justify"
                      sx={{ fontSize: "1.0rem" }}
                    >
                      {t.morse_code_column_code}
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {chunk(Object.entries(morseCode), 2).map(
                    ([left, right], index) => (
                      <TableRow key={index}>
                        <TableCell
                          align="justify"
                          sx={{ color: "text.secondary" }}
                        >
                          {left[1]}
                        </TableCell>
                        <TableCell
                          align="justify"
                          sx={{ fontSize: "2rem", color: "text.secondary" }}
                        >
                          {left[0]}
                        </TableCell>
                        {right && (
                          <>
                            <TableCell
                              align="justify"
                              sx={{ color: "text.secondary" }}
                            >
                              {right[1]}
                            </TableCell>
                            <TableCell
                              align="justify"
                              sx={{ fontSize: "2rem", color: "text.secondary" }}
                            >
                              {right[0]}
                            </TableCell>
                          </>
                        )}
                      </TableRow>
                    ),
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
        <Grid>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            {t.japanese_mode}
          </Typography>
          <Switch
            color="primary"
            checked={isJapanese}
            onChange={(e) => setIsJapanese(e.target.checked)}
          />
        </Grid>
        <Grid>
          <Box>
            <Typography
              id="dot-duration-slider"
              color="text.secondary"
              gutterBottom
            >
              {t.dot_duration}: {dotDuration}ms
            </Typography>
            <Slider
              color="primary"
              value={dotDuration}
              onChange={changedDuration}
              aria-labelledby="dot-duration-slider"
              valueLabelDisplay="auto"
              sx={{ width: "70%" }}
              marks
              step={10}
              min={150}
              max={350}
            />
          </Box>
        </Grid>

        <Grid>
          <Typography
            variant="body1"
            color="text.secondary"
            gutterBottom
            paragraph={true}
            sx={{ whiteSpace: "pre-line" }}
          >
            {t.morse_code_description}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              width: "9rem",
              height: "9rem",
              borderRadius: "20%",
              fontSize: "1.2rem",
            }}
            onMouseDown={() => {
              startPress();
            }}
            onMouseUp={endPress}
          ></Button>
        </Grid>
        <Grid>
          <Button
            variant="contained"
            startIcon={<RefreshIcon />}
            onClick={resetInput}
          >
            {t.reset}
          </Button>
        </Grid>
        <Grid>
          <Paper elevation={3} sx={{ py: 2, width: "70%", mx: "auto", my: 2 }}>
            <Typography variant="h6" gutterBottom color="text.primary">
              {t.morse_code_input}:
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ fontSize: "2rem" }}
            >
              {morseInput + currentLetter}
            </Typography>
          </Paper>
          <Paper elevation={3} sx={{ py: 2, width: "70%", mx: "auto", my: 2 }}>
            <Typography variant="h6" gutterBottom color="text.primary">
              {t.morse_code_output}:
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {result}
            </Typography>
          </Paper>
        </Grid>
      </Stack>
    </Grid>
  );
};

const MorseCode: NextPage<CategoriesAndTagsResponseProps> = ({
  categories,
  tags,
  variables,
}) => {
  const { data, error } = useSWR([getCategoriesAndTags, variables], {
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
      // Never retry on 404.
      if (error.status === 404) return;
      // Only retry up to 10 times.
      if (retryCount >= 10) return;
      // Retry after 3 seconds.
      setTimeout(() => revalidate({ retryCount }), 3000);
    },
    fallbackData: { categories: categories, tags: tags, variables: variables },
  });
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
