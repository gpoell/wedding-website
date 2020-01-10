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
    fontSize: "3rem",
    "@media (min-width:600px)": {
      fontSize: "4.5rem"
    },
    fontFamily: ["Verdana"]
  },
  overrides: {
    MuiTypography: {
      h1: {
        fontFamily: "Georgia",
        fontSize: "5rem",
        fontWeight: 700,
        marginBottom: "1rem"
      },
      body1: {
        fontFamily: "Verdana",
        fontSize: "1.125rem",
        fontWeight: 400,
        marginBottom: 20
      }
    }
  }
});
