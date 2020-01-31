import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    primary: {
      main: "#d4af37",
      dark: "#d4af37"
    },
    secondary: {
      main: "#d4af37"
    },
    grey: {
      main: "#f6f6f6"
    }
  },
  typography: {
    fontSize: 18,
    "@media (min-width:400px)": {
      fontSize: 8
    },
    fontFamily: ["Verdana"]
  },
  overrides: {
    MuiCard: {
      root: {
        marginTop: 30,
        marginBottom: 30,
        boxShadow: "0 0 1.5rem rgba(105,105,105,.5)"
      }
    },
    MuiCardContent: {
      root: {
        alignItems: "center",
        display: "flex"
      }
    },
    MuiTypography: {
      h1: {
        fontFamily: "Pinyon Script, cursive;",
        fontSize: 120,
        fontWeight: 200,
        marginBottom: "1rem",
        "@media (max-width:800px)": {
          fontSize: 60,
          fontWeight: 400
        }
      },
      h2: {
        fontFamily: "Georgia",
        fontSize: 44,
        fontWeight: 700,
        marginBottom: 15
      },
      h3: {
        fontFamily: "Georgia",
        fontSize: 24,
        fontWeight: 400,
        "@media (max-width:800px)": {
          fontSize: 16
        }
      },
      h5: {
        fontFamily: "Georgia",
        fontSize: 24,
        marginTop: 10,
        "@media (max-width:800px)": {
          fontSize: 18
        }
      },
      body1: {
        fontFamily: "Verdana",
        fontSize: 16,
        fontWeight: 400,
        marginBottom: 20
      },
      body2: {
        fontFamily: "Verdana",
        fontSize: 16,
        "@media (max-width:800px)": {
          fontSize: 12
        }
      },
      // Subtitle header for details | ex: Weekend Schedule details
      subtitle1: {
        fontFamily: "Verdana",
        fontSize: 24,
        fontWeight: 600,
        marginBottom: 10
      },
      // Subtitle body for details | ex: location, time, etc..
      subtitle2: {
        fontFamily: "Verdana",
        fontSize: 15
      }
    }
  }
});
