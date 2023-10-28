import { alpha } from "@mui/material";

export const darkPalette = {
  primary: {
    main: "#4889EE",
  },
  secondary: {
    main: "#00FF00",
  },
  divider: "#382934",
  action: {
    active: "#D9DA70",
    hover: "#D8D780",
    selected: "#2F2F2F",
    disabled: "#1C1C1C",
    disabledBackground: "#392855",
  },
  background: {
    default: "#888888",
    paper: "#000000",
    content: alpha("#202020", 0.7),
    sidebar: "#0C0C0C",
  },
  text: {
    primary: "#DA59D9",
    secondary: "#E3E3E3",
    link: "#4889EE",
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
};

export const lightPalette = {
  primary: {
    main: "#6498c9",
  },
  secondary: {
    main: "#3233AA",
  },
  divider: "#EEEEE9",
  action: {
    active: "#FFFFFF",
    hover: "#ddda32",
    selected: "#feeefe",
    disabled: "#382934",
    disabledBackground: "#339388",
  },
  background: {
    default: "#ffffff",
    paper: "#fffff8",
    content: "#ddd8dF",
    sidebar: "#80a3c5",
  },
  text: {
    primary: "#131313",
    secondary: "#212121",
    link: "#E88244",
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
};
