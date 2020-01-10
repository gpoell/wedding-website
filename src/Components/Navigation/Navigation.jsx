import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import { styles } from "./styles";

const Navigation = props => {
  const tabs = [
    "Home",
    "Weekend Schedule",
    "Travel",
    "Accomodations",
    "Registry"
  ];

  return (
    <Grid container justify='center' style={styles.container}>
      <Grid
        container
        item
        xs={12}
        md={8}
        justify='center'
        style={styles.container}
      >
        <Tabs
          value={props.value}
          onChange={props.handleChange}
          variant='scrollable'
          scrollButtons='on'
          indicatorColor='primary'
          textColor='primary'
          aria-label='scrollable force tabs example'
        >
          {tabs.map(tab => {
            return <Tab label={tab} key={tab} name={tab} />;
          })}
        </Tabs>
      </Grid>
    </Grid>
  );
};

export default Navigation;
