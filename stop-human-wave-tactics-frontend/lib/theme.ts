import HackGen from "../fonts/HackGen35ConsoleNFJ-Regular.ttf"
export const darkPallete = {
    divider: "#382934",
    action: {
        active: "#484923",
        hover: "#ddda32",
        selected: "#83f384",
        disabled: "#382934",
        disabledBackground: "#339388",
    },
    background: {
        default: "#888888",
        paper: "#000000",
    },
    text: {
        primary: "#DA59D9",
        secondary: "#FF8F3F",
    },
    typography: {
        fontFamily: [
            "HackGen",
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
    components: {
        MuiCssBaseline: {
            styleOverrides: `
        @font-face {
          font-family: 'HackGen';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('HackeGen Console NFJ-Regular'), url(${HackGen}) format('ttf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
        },
    },
}

export const lightPallete = {
    divider: "#383838",
    action: {
        active: "#484923",
        hover: "#ddda32",
        selected: "#83f384",
        disabled: "#382934",
        disabledBackground: "#339388",
    },
    background: {
        default: "#ffffff",
        paper: "#fffff8",
    },
    text: {
        primary: "#000000",
        secondary: "#842900",
    },
    typography: {
        fontFamily: [
            "HackGen",
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
    components: {
        MuiCssBaseline: {
            styleOverrides: `
        @font-face {
          font-family: 'HackGen';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('HackeGen Console NFJ-Regular'), url(${HackGen}) format('ttf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
        },
    },
}
