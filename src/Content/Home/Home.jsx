import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import HomePageTitle from "../../Components/HomePageTitle/HomePageTitle";
import Navigation from "../../Components/Navigation/Navigation";

const Home = () => {
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
    <Grid container>
      <HomePageTitle />
      <Navigation value={value} handleChange={handleChange} />
    </Grid>
  );
};

export default Home;
