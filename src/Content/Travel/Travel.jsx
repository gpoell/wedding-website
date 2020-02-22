import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TravelOptions from "../../Components/TravelOptions/TravelOptions";
import { options } from "./options";
import { styles } from "./styles";

const Travel = () => {
  return (
    <Grid container item md={10} style={styles.container}>
      <Typography variant='h2'>Travel Recommendations</Typography>
      <Typography variant='body1'>
        We greatly appreciate everyone's effort to travel to Highlands to share
        our special day. Below are the closest airports with their drive times
        and distances to Highlands, along with links that will take you to the
        rental car pages and Google Maps directions.
      </Typography>
      <Typography variant='body1'>
        If traveling from Charlotte, we recommend using the default route
        provided through the Google Maps link below. While this may not appear
        to be the quickest option, this route is the least likely to make you
        sick or get you stuck in traffic lights along Highway 74 - and it is the
        route Kelsey’s family has driven for 30+ years!
      </Typography>
      <TravelOptions options={options} />
    </Grid>
  );
};

export default Travel;
