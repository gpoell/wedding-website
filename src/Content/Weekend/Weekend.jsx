import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import venue from "../../Images/venue.jpg";
import { styles } from "./styles";

const Weekend = () => {
  return (
    <>
      <Grid container item md={6}>
        <img src={venue} alt='Kelsey and Garrett' style={styles.photo} />
      </Grid>
      <Grid container item md={6} style={styles.container}>
        <h1>Lake Day</h1>
        <p>
          We are very excited to share our special day with you all and we are
          counting down the days to our big wedding day!
        </p>
        <p>
          We hope we have provided you with all of the information you will
          need, so please navigate through each of the tabs to find more details
          on our wedding weekend.
        </p>
        <p>
          Looking forward to seeing you all and feel free to reach out with
          additional questions.
        </p>
      </Grid>
      <Grid container item md={6} style={styles.container}>
        <h1>Welcome Party</h1>
        <p>
          We are very excited to share our special day with you all and we are
          counting down the days to our big wedding day!
        </p>
        <p>
          We hope we have provided you with all of the information you will
          need, so please navigate through each of the tabs to find more details
          on our wedding weekend.
        </p>
        <p>
          Looking forward to seeing you all and feel free to reach out with
          additional questions.
        </p>
      </Grid>
      <Grid container item md={6}>
        <img src={venue} alt='Kelsey and Garrett' style={styles.photo} />
      </Grid>
      <Grid container item md={6}>
        <img src={venue} alt='Kelsey and Garrett' style={styles.photo} />
      </Grid>
      <Grid container item md={6} style={styles.container}>
        <h1>Wedding</h1>
        <p>
          We are very excited to share our special day with you all and we are
          counting down the days to our big wedding day!
        </p>
        <p>
          We hope we have provided you with all of the information you will
          need, so please navigate through each of the tabs to find more details
          on our wedding weekend.
        </p>
        <p>
          Looking forward to seeing you all and feel free to reach out with
          additional questions.
        </p>
      </Grid>
    </>
  );
};

export default Weekend;
