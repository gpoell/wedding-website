import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { styles } from "./styles";

const HomePageTitle = () => {
  return (
    <Grid
      container
      justify='center'
      direction='row'
      alignContent='center'
      alignItems='center'
    >
      <Grid container item xs={12} style={styles.title}>
        <Typography variant='h1'>
          Kelsey <span style={styles.and}>and</span> Garrett
        </Typography>
        <Typography variant='h3'>Highlands, NC | September 25, 2021</Typography>
      </Grid>
    </Grid>
  );
};

export default HomePageTitle;
