import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TravelOptions from "../../Components/TravelOptions/TravelOptions";
import { options } from "./options";
import { styles } from "./styles";

const Travel = () => {
  return (
    <Grid container item md={10} style={styles.container}>
      <Typography variant='h1'>Travel Recommendations</Typography>
      <Typography variant='body1'>
        We greatly appreciate everyone's effort to travel to Highlands to share
        our special day, especially those who will need to fly. Below are the
        closest airports with their drive times and distances to Highlands,
        along with links that will take you to the rental car pages and Google
        Maps directions.
      </Typography>
      <TravelOptions options={options} />
    </Grid>
  );
};

export default Travel;
