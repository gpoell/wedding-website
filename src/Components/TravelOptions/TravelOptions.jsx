import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import { styles } from "./styles";
import Zoom from "@material-ui/core/Zoom";
import "./css.css";

const TravelOptions = props => {
  return (
    <>
      {props.options.map((option, index) => (
        <Zoom in timeout={index === 0 ? 500 : index * 750} key={index}>
          <Grid container item md={6} lg={6} justify='center'>
            <Card style={styles.card} className='card'>
              <CardHeader
                title={
                  <Typography variant='subtitle1'>{option.location}</Typography>
                }
                subheader={option.airport}
                disableTypography={true}
              />
              <CardMedia
                style={styles.media}
                image={option.image}
                title={option.airport}
              />
              <CardContent>
                <DriveEtaIcon style={styles.icons} />
                <Typography variant='subtitle2'>
                  {option.drive} | {option.miles}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <Button
                  href={option.rentalCars}
                  target='_blank'
                  color='secondary'
                  variant='contained'
                  style={styles.button}
                >
                  Rental Cars
                </Button>
                <Button
                  href={option.googleMaps}
                  target='_blank'
                  color='secondary'
                  variant='contained'
                  style={styles.button}
                >
                  Google Maps
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Zoom>
      ))}
    </>
  );
};

export default TravelOptions;
