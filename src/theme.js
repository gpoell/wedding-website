import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    primary: {
      main: "#ABA6D5"
    },
    secondary: {
      main: "#8078BF"
    },
    grey: {
      main: "#C1BDE0"
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
    MuiTypography: {
      h1: {
        fontFamily: "Georgia",
        fontSize: 44,
        fontWeight: 700,
        marginBottom: "1rem"
      },
      h2: {
        fontFamily: "Georgia",
        fontSize: 44,
        fontWeight: 700,
        marginBottom: 15
      },
      h3: {
        fontFamily: "Georgia",
        fontSize: 34,
        fontWeight: 400
      },
      body1: {
        fontFamily: "Verdana",
        fontSize: 16,
        fontWeight: 400,
        marginBottom: 20
      },
      subtitle1: {
        fontFamily: "Verdana",
        fontSize: 24,
        fontWeight: 500
      },
      subtitle2: {
        fontFamily: "Verdana",
        fontSize: 18,
        fontWeight: 200
      }
    }
  }
});
