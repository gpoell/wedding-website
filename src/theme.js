import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    primary: {
      main: "#d4af37",
      dark: "#d4af37"
    },
    secondary: {
      main: "#f6f6f6"
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
    MuiTab: {
      root: {
        fontFamily: "Verdana",
        marginTop: 10,
        marginRight: 10,
        "@media (max-width:800px)": {
          fontSize: 16
        }
      }
    },
    MuiButton: {
      root: {
        fontSize: "1rem"
      }
    },
    MuiTypography: {
      // Largest Text - Title of Page (Kelsey and Garrett)
      h1: {
        fontFamily: "SerenityScriptBold-Regular",
        fontWeight: 550,
        fontSize: 150,
        letterSpacing: 5,
        marginBottom: "1rem",
        "@media (max-width:800px)": {
          fontSize: 90,
          fontWeight: 400
        }
      },
      // Content headers - Travel, Accomodations, Weekend Schedule
      h2: {
        fontFamily: "SerenityScriptBold-Regular",
        fontSize: 80,
        marginBottom: 15,
        "@media (max-width:800px)": {
          fontSize: 70
        }
      },
      // Title Subheader - "Highlands, NC | September 2020"
      h3: {
        fontFamily: "Georgia",
        fontSize: 24,
        fontWeight: 500,
        color: "#d4af37",
        "@media (max-width:800px)": {
          fontSize: 16
        }
      },
      // Nav/Tabs, Card Headers
      h4: {
        fontFamily: "Verdana",
        fontSize: 25,
        marginTop: 10,
        "@media (max-width:800px)": {
          fontSize: 18
        }
      },
      // Footer
      h5: {
        fontFamily: "Verdana",
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
        fontSize: 20,
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
