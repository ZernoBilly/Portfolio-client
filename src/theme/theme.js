export default {
  palette: {
    primary: {
      main: "#EFEFEF",
      dark: "#a7a7a7",
      light: "#f2f2f2",
    },
    secondary: {
      main: "#A9A9A9",
      dark: "#767676",
      light: "#bababa",
    },
    optional: {
      main: "#CAEBF2",
      dark: "#8da4a9",
      light: "#d4eff4",
    },
    highlight: {
      main: "#FF3B3F",
      dark: "#b2292c",
      light: "#ff6265",
    },
    text: {
      main: "#1b1b1b",
      dark: "#121212",
      ligth: "#fafafa",
    },
  },

  fontFamily: {
    primary: "'Ubuntu', sans-serif",
    secondary: "'Urbanist', sans-serif",
  },
  mediaQueries: {
    xs: "only screen and (max-width: 600px)",
    sm: "only screen and (max-width: 960px)",
    md: "only screen and (max-width: 1280px)",
    //@media ${({ theme }) => theme.mediaQueries.md} {}
  },
};
