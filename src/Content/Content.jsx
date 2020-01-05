import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import HomePageTitle from "../Components/HomePageTitle/HomePageTitle";
import Navigation from "../Components/Navigation/Navigation";
import Home from "./Home/Home";
import { styles } from "./styles";

const Content = () => {
  // const isMobileDevice = () => {
  //   return (
  //     typeof window.orientation !== "undefined" ||
  //     navigator.userAgent.indexOf("IEMobile") !== -1
  //   );
  // };
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container justify='center'>
      <HomePageTitle />
      <Navigation value={value} handleChange={handleChange} />
      <Grid container item xs={7} style={styles.sections}>
        {value === 0 && <Home />}
      </Grid>
    </Grid>
  );
};

export default Content;
