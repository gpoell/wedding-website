import React from "react";
import Grid from "@material-ui/core/Grid";
import { styles } from "./styles";

const Sections = props => {
  return (
    <Grid container item style={styles.container} md={8} xs={12}>
      {props.children}
    </Grid>
  );
};

export default Sections;
