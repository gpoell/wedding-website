import React from "react";
import imgFloralLeft from "../../Images/floral-design-left.png";
import imgFloralRight from "../../Images/floral-design-right.png";
import imgHomeCent from "../../Images/centerpiece.JPEG";
import Grid from "@material-ui/core/Grid";
import { styles } from "./styles";

const HomePageTitle = () => {
  return (
    <Grid container justify='center' direction='row' style={styles.container}>
      <Grid container item xs={3} justify='flex-end' alignContent='center'>
        <img src={imgFloralRight} alt='floral design' style={styles.decor} />
      </Grid>
      <Grid container item xs={3} alignContent='center' justify='center'>
        <img src={imgHomeCent} alt='Garrett and Kelsey' style={styles.photo} />
      </Grid>
      <Grid container item xs={3} justify='flex-start' alignContent='center'>
        <img src={imgFloralLeft} alt='floral design' style={styles.decor} />
      </Grid>
    </Grid>
  );
};

export default HomePageTitle;
