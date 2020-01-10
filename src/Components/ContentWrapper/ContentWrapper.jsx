import React from "react";
import Grid from "@material-ui/core/Grid";
import { styles } from "./styles";

const ContentWrapper = props => {
  return (
    <Grid container style={styles.container} md={8} xs={12}>
      {props.children}
    </Grid>
  );
};

export default ContentWrapper;
