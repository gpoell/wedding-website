import React from "react";
import Grid from "@material-ui/core/Grid";
import Zoom from "@material-ui/core/Zoom";
import home from "../../Images/Home/K&G-092.jpg";
import { styles } from "./styles";

const Home = () => {
  return (
    <>
      <Grid container item xs={10} lg={10} md={8}>
        <Zoom in timeout={750}>
          <img src={home} alt='Kelsey and Garrett' style={styles.photo} />
        </Zoom>
      </Grid>
    </>
  );
};

export default Home;
