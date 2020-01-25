import React from "react";
import Grid from "@material-ui/core/Grid";
import imgMountains from "../../Images/Footer/mountains.svg";
import InstagramIcon from "@material-ui/icons/Instagram";
import { styles } from "./styles";
import { Typography } from "@material-ui/core";

const Footer = () => {
  return (
    <Grid container style={styles.container}>
      <Grid container item xs={12} justify='center'>
        <Typography variant='h5'>Save The Date</Typography>
        <img src={imgMountains} alt='Mountains icon' style={styles.icon} />
        <Typography variant='h5'>September 12, 2020</Typography>
      </Grid>
      <Grid container item xs={12} justify='center'>
        <Typography variant='body2'>
          {" "}
          Icons made by{" "}
          <a href='https://www.flaticon.com/authors/freepik' title='Freepik'>
            Freepik
          </a>{" "}
          from{" "}
          <a href='https://www.flaticon.com/' title='Flaticon'>
            www.flaticon.com
          </a>
        </Typography>
      </Grid>
      <Grid container item xs={12} justify='center'>
        <InstagramIcon viewBox='0 0 30 30' />
        <Typography variant='body2'>eleanorkathphotography</Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
