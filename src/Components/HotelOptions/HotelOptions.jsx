import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Zoom from "@material-ui/core/Zoom";
import Button from "@material-ui/core/Button";
import HotelDetails from "./HotelDetails";
import { styles } from "./styles";

const HotelOptions = props => {
  return (
    <>
      {props.options.map((option, index) => (
        <Zoom in timeout={index === 0 ? 500 : index * 750} key={index}>
          <Paper style={styles.paper} elevation={5}>
            <Grid container style={styles.container}>
              <Grid container item xs={12} lg={4} md={4}>
                <img
                  src={option.image}
                  alt={option.hotel}
                  style={styles.image}
                />
              </Grid>
              <Grid
                container
                item
                xs={12}
                md={5}
                lg={5}
                alignContent='center'
                style={styles.detailContainer}
              >
                <HotelDetails option={option} />
              </Grid>
              <Grid container item xs={12} lg={3} md={3} alignItems='flex-end'>
                <Button
                  href={option.website}
                  target='_blank'
                  color='black'
                  variant='outlined'
                  style={styles.button}
                >
                  View Website
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Zoom>
      ))}
    </>
  );
};

export default HotelOptions;
