import { createTheme } from "@mui/material/styles";
import DanaFANum from "assets/fonts/dana-fanum-regular.ttf";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 667,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    htmlFontSize: 22,
    fontFamily: "DanaFANum ",
    fontSize: 18,
    h1: {
      fontSize: "22px",
      lineHeight: "32px",
      fontWeight: 500,
    },
    caption: {
      fontSize: "12px",
      fontWeight: 500,
      lineHeight: "16px",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
            @font-face {
              font-family: 'DanaFANum';
              font-style: normal;
              font-display: swap;
              src: local('DanaFANum '), local('DanaFANum -Regular'), url(${DanaFANum}) format('woff2');
              unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
            }
          `,
    },
  },
});
