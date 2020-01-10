import React from "react";
import Grid from "@material-ui/core/Grid";
import { styles } from "./styles";

const ImageContainer = props => {
  return (
    <Grid container item md={6} style={styles.container} alignContent='center'>
      {props.children}
    </Grid>
  );
};

export default ImageContainer;
