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
            Come join us for a day at Lake Keowee on your way to Highlands.
            There will be plenty of food and hopefully sunshine. We will be
            serving lunch around 1:00pm. The lake house is a 2.5 hour drive from
            Charlotte and 1 hour drive from Highlands.
          </Typography>
          <Typography variant='body1'></Typography>
          <Details details={details.lake} />
        </ContentContainer>
      </Grid>
      <Grid container item xs={12} style={styles.rows}>
        <ContentContainer>
          <Typography variant='h2'>Welcome Party</Typography>
          <Typography variant='body1'>
            As a welcome to Highlands, please join us at Highlands Wine Shoppe
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
          <Typography variant='h2'>Wedding</Typography>
          <Typography variant='body1'>
            We are very excited to share our special day with you! The Ceremony
            and Reception will be outside on the Piermont Cottage lawn.
          </Typography>
          <Details details={details.wedding} />
        </ContentContainer>
      </Grid>
    </>
  );
};

export default Weekend;
