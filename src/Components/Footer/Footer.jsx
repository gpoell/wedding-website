import React from "react";
import Grid from "@material-ui/core/Grid";
import imgMountains from "../../Images/Footer/mountains.svg";
import { styles } from "./styles";
import { Typography } from "@material-ui/core";

const Footer = () => {
  return (
    <Grid container style={styles.container}>
      <Grid container item xs={12} justify='center' className='container'>
        <Typography variant='h5'>HIGHLANDS, NC</Typography>
        <img src={imgMountains} alt='Mountains icon' style={styles.icon} />
        <Typography variant='h5'>SEPTEMBER 25, 2021</Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
