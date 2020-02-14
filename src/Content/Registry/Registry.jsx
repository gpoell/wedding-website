import React from "react";
import Grid from "@material-ui/core/Grid";
import Zoom from "@material-ui/core/Zoom";
import registry from "../../Images/Registry/registry.PNG";
import { styles } from "./styles";
import "./registry.css";

const Registry = () => {
  return (
    <>
      <Grid container item xs={10} lg={10} md={8}>
        <Zoom in timeout={750}>
          <a
            href='https://www.zola.com/registry/kelseyandgarrettseptember12'
            target='_blank'
            title='Kelsey and Garrett registary homepage'
            rel='noopener noreferrer'
          >
            <img
              src={registry}
              alt='Kelsey and Garrett registry'
              style={styles.photo}
              className='registry'
            />
          </a>
        </Zoom>
      </Grid>
    </>
  );
};

export default Registry;
