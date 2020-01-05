import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import { styles } from "./styles";

const Navigation = props => {
  const tabs = [
    "Home",
    "Wedding Venue",
    "Weekend Schedule",
    "Travel",
    "Accomodations",
    "Registry"
  ];

  return (
    <Grid container>
      <Grid container item xs={12} justify='center' style={styles.container}>
        <Tabs
          value={props.value}
          onChange={props.handleChange}
          indicatorColor='primary'
          textColor='primary'
          centered
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
