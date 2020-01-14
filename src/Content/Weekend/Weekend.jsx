import React from "react";
import ImageContainer from "./../../Components/Sections/ImageContainer/ImageContainer";
import ContentContainer from "./../../Components/Sections/ContentContainer/ContentContainer";
import Details from "../../Components/Sections/Details/Details";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import venue from "../../Images/venue.PNG";
import lakehouse from "../../Images/lakehouse.jpeg";
import wineShoppe from "../../Images/wine_shoppe.png";
import { details } from "./details";
import { styles } from "./styles";

const Weekend = () => {
  return (
    <>
      <Grid container item xs={12} style={styles.rows}>
        <ImageContainer>
          <img
            src={lakehouse}
            alt='Lake Keowee Lakehouse'
            style={styles.photo}
          />
        </ImageContainer>
        <ContentContainer>
          <Typography variant='h2'>Lake Day</Typography>
          <Typography variant='body1'>
            Come join us for a day at the lake on your way to Highlands. There
            will be plenty of food and hopefully sunshine. The Keowee House is
            2.5 hours from Charlotte and 1 hour from Highlands.
          </Typography>
          <Typography variant='body1'></Typography>
          <Details details={details.lake} />
        </ContentContainer>
      </Grid>
      <Grid container item xs={12} style={styles.rows}>
        <ContentContainer>
          <Typography variant='h1'>Rehearsal Dinner</Typography>
          <Typography variant='body1'>
            The rehearsal dinner will take place at Highlands Wine Shoppe
            located in town and within walking distance from your hotels. For
            those that need to drive, there is plenty of public parking along
            Main Street.
          </Typography>
          <Details details={details.rehearsal} />
        </ContentContainer>
        <ImageContainer>
          <img src={wineShoppe} alt='Kelsey and Garrett' style={styles.photo} />
        </ImageContainer>
      </Grid>
      <Grid container item xs={12} style={styles.rows}>
        <ImageContainer>
          <img src={venue} alt='Kelsey and Garrett' style={styles.photo} />
        </ImageContainer>
        <ContentContainer>
          <Typography variant='h1'>Wedding</Typography>
          <Typography variant='body1'>
            We are very excited to share our special day with you all and we are
            counting down the days to our big wedding day!
          </Typography>
          <Details details={details.wedding} />
        </ContentContainer>
      </Grid>
    </>
  );
};

export default Weekend;
