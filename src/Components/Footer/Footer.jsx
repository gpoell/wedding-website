import React from "react";
import Grid from "@material-ui/core/Grid";
import imgFooter from "../../Images/footer.png";
import { styles } from "./styles";

const Footer = () => {
  return (
    <Grid container justify='center' style={styles.container}>
      <Grid container item md={2} xs={5} justify='center'>
        <h2>Save The Date</h2>
      </Grid>
      <Grid
        container
        item
        md={1}
        xs={2}
        justify='center'
        alignItems='center'
        fontSize='large'
      >
        <img src={imgFooter} alt='airplane taking off' style={styles.icon} />
      </Grid>
      <Grid container item md={2} xs={5} justify='center'>
        <h2>September 12, 2020</h2>
      </Grid>
      <Grid container item xs={12} justify='center'>
        Icons made by{" "}
        <a href='https://www.flaticon.com/authors/freepik' title='Freepik'>
          Freepik
        </a>{" "}
        from{" "}
        <a href='https://www.flaticon.com/' title='Flaticon'>
          www.flaticon.com
        </a>
      </Grid>
    </Grid>
  );
};

export default Footer;
