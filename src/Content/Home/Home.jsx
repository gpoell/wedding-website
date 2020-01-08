import React from "react";
import Grid from "@material-ui/core/Grid";
import home1 from "../../Images/home1.JPEG";
import { styles } from "./styles";

const Home = () => {
  return (
    <>
      <Grid container item md={6} style={styles.container}>
        <h1>Hello Friends and Family!</h1>
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
      <Grid container item md={6} justify='flex-end' alignContent='left'>
        <img src={home1} alt='Kelsey and Garrett' style={styles.photo} />
      </Grid>
    </>
  );
};

export default Home;
