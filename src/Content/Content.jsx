import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import HomePageTitle from "../Components/HomePageTitle/HomePageTitle";
import Navigation from "../Components/Navigation/Navigation";
import Sections from "../Components/Sections/Sections";
import Home from "./Home/Home";
import Weekend from "./Weekend/Weekend";
import Travel from "./Travel/Travel.jsx";
import Accomodations from "./Accomodations/Accomodations";
import Footer from "../Components/Footer/Footer";

const Content = () => {
  // const isMobileDevice = () => {
  //   return (
  //     typeof window.orientation !== "undefined" ||
  //     navigator.userAgent.indexOf("IEMobile") !== -1
  //   );
  // };
  const [value, setValue] = useState(3);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container justify='space-evenly'>
      <HomePageTitle />
      <Navigation value={value} handleChange={handleChange} />
      <Sections>
        {value === 0 && <Home />}
        {value === 1 && <Weekend />}
        {value === 2 && <Travel />}
        {value === 3 && <Accomodations />}
      </Sections>
      <Footer />
    </Grid>
  );
};

export default Content;
