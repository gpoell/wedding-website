import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import HomePageTitle from "../Components/HomePageTitle/HomePageTitle";
import Navigation from "../Components/Navigation/Navigation";
import ContentWrapper from "../Components/ContentWrapper/ContentWrapper";
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
      <ContentWrapper>{value === 0 && <Home />}</ContentWrapper>
    </Grid>
  );
};

export default Content;
