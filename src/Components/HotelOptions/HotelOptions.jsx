import React from "react";
import Typography from "@material-ui/core/Typography";
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
            <Grid container>
              <Grid container item xs={4}>
                <img
                  src={option.image}
                  alt={option.hotel}
                  style={styles.image}
                />
              </Grid>
              <Grid
                container
                item
                xs={6}
                alignContent='center'
                style={styles.detailContainer}
              >
                <HotelDetails option={option} />
              </Grid>
              <Grid
                container
                item
                xs={2}
                alignContent='center'
                justify='flex-end'
                style={{ padding: 30 }}
              >
                <Typography variant='subtitle1'>${option.price}</Typography>
                <Button
                  href={option.website}
                  target='_blank'
                  color='secondary'
                  variant='outlined'
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
