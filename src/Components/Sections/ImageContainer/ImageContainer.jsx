import React from "react";
import Grid from "@material-ui/core/Grid";
import Zoom from "@material-ui/core/Zoom";
import { styles } from "./styles";

const ImageContainer = props => {
  return (
    <Grid container item md={6} style={styles.container} alignContent='center'>
      <Zoom in timeout={750}>
        {props.children}
      </Zoom>
    </Grid>
  );
};

export default ImageContainer;
