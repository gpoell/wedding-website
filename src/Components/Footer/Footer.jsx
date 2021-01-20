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
      <Grid container item xs={12} justify='center'>
        <Typography variant='body2'>
          Icons by{" "}
          <a
            href='https://www.flaticon.com/authors/freepik'
            title='Freepik'
            target='_blank'
            rel='noopener noreferrer'
            style={{ color: "black" }}
          >
            Freepik
          </a>{" "}
          | Photos by{" "}
          <a
            href='https://www.instagram.com/eleanorkathphotography/'
            title='eleanorkathphotography'
            target='_blank'
            rel='noopener noreferrer'
            style={{ color: "black" }}
          >
            eleanorkathphotography
          </a>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
