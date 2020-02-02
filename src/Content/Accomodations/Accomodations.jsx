import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import HotelOptions from "../../Components/HotelOptions/HotelOptions";
import { options } from "../../Components/HotelOptions/options";
import { styles } from "./styles";

const Accomodations = () => {
  return (
    <Grid
      container
      item
      xs={12}
      sm={8}
      md={10}
      lg={8}
      xl={10}
      style={styles.container}
    >
      <Typography variant='h2'>Accomodations</Typography>
      <Typography variant='body1'>
        Below you will find a list of hotels within walking distance to our
        venue that we highly recommend. The biggest reason we chose our venue is
        its location in town where everything is walkable. We want everyone to
        enjoy their time at the wedding and not worry about anyone operating a
        motor vehicle after a few drinks.
      </Typography>
      <Typography variant='body1'>
        Additional lodging options can be found through{" "}
        <a
          href='https://www.airbnb.com/'
          title='Airbnb'
          target='_blank'
          rel='noopener noreferrer'
          style={{ color: "black" }}
        >
          Airbnb
        </a>{" "}
        and{" "}
        <a
          href='https://www.vrbo.com/'
          target='_blank'
          title='Vrbo'
          rel='noopener noreferrer'
          style={{ color: "black" }}
        >
          Vrbo
        </a>
        . Please keep in mind that we are not providing any transportaion for
        the weekend since everything is walkable. For any questions about
        lodging please reach out to Sharon Manning at (704)-301-4504.
      </Typography>
      <HotelOptions options={options} />
    </Grid>
  );
};

export default Accomodations;
