import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import HomePageTitle from "../Components/HomePageTitle/HomePageTitle";
import Navigation from "../Components/Navigation/Navigation";
import Sections from "../Components/Sections/Sections";
import Home from "./Home/Home";
import Weekend from "./Weekend/Weekend";
import Travel from "./Travel/Travel.jsx";
import Accomodations from "./Accomodations/Accomodations";
import Registry from "./Registry/Registry";
import Footer from "../Components/Footer/Footer";

const Content = () => {
  const [value, setValue] = useState(0);

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
        {value === 4 && <Registry />}
      </Sections>
      <Footer />
    </Grid>
  );
};

export default Content;
