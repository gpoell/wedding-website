import React from "react";
import Grid from "@material-ui/core/Grid";
import home from "../../Images/Home/home_blacknwhite.jpg";
import { styles } from "./styles";

const Home = () => {
  return (
    <>
      <Grid container item xs={10} lg={10} md={8}>
        <img src={home} alt='Kelsey and Garrett' style={styles.photo} />
      </Grid>
    </>
  );
};

export default Home;
