import React from "react";
import Grid from "@material-ui/core/Grid";
import { styles } from "./styles";

const Sections = props => {
  return (
    <Grid
      container
      item
      style={styles.container}
      xl={8}
      lg={12}
      md={12}
      xs={12}
      justify='center'
    >
      {props.children}
    </Grid>
  );
};

export default Sections;
