import React from "react";
import Typography from "@material-ui/core/Typography";
import imgHomeCent from "../../Images/centerpiece.JPEG";
import Grid from "@material-ui/core/Grid";
import { styles } from "./styles";

const HomePageTitle = () => {
  return (
    <Grid container justify='center' direction='row' style={styles.container}>
      <Grid container item md={2} justify='center' alignContent='center'>
        <Typography variant='h3'>Highlands, North Carolina</Typography>
      </Grid>
      <Grid container item md={3} alignContent='center' justify='center'>
        <img src={imgHomeCent} alt='Garrett and Kelsey' style={styles.photo} />
      </Grid>
      <Grid container item md={2} justify='center' alignContent='center'>
        <Typography variant='h3'>September 12, 2020</Typography>
      </Grid>
    </Grid>
  );
};

export default HomePageTitle;
