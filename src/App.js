import React from "react";
import Content from "./Content/Content";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Content />;
    </ThemeProvider>
  );
};

export default App;
