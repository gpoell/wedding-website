import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import HomePageTitle from "../../Components/HomePageTitle/HomePageTitle";
import { styles } from "./styles";

const Home = () => {
  // const isMobileDevice = () => {
  //   return (
  //     typeof window.orientation !== "undefined" ||
  //     navigator.userAgent.indexOf("IEMobile") !== -1
  //   );
  // };
  // const [mobile, setMobile] = useState(false);

  // useEffect(() => {
  //   console.log(isMobileDevice());
  // }, []);

  return (
    <Grid container>
      <HomePageTitle />
    </Grid>
  );
};

export default Home;
