import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import HotelOptions from "../../Components/HotelOptions/HotelOptions";
import { options } from "../../Components/HotelOptions/options";
import { styles } from "./styles";

const Accomodations = () => {
  return (
    <Grid container item md={10} xs={12} style={styles.container}>
      <Typography variant='h2'>Accomodations</Typography>
      <Typography variant='body1'>
        Below you will find a list of hotels within walking distance to our
        venue that we highly recommend. The biggest reason we chose our venue is
        its location in town where everything is walkable. We want everyone to
        enjoy their time at the wedding and not worry about anyone operating a
        motor vehicle after a few drinks. If you have any questions about these
        options please let us know.
      </Typography>
      <HotelOptions options={options} />
    </Grid>
  );
};

export default Accomodations;
