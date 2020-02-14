import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";

const Navigation = props => {
  const tabs = [
    "Home",
    "Weekend Schedule",
    "Travel",
    "Accomodations",
    "Registry"
  ];

  return (
    <Grid container justify='center'>
      <Grid container item xs={12} justify='center'>
        <Tabs
          value={props.value}
          onChange={props.handleChange}
          variant='scrollable'
          scrollButtons='on'
          indicatorColor='primary'
          textColor='primary'
          aria-label='scrollable tabs for navigating the site'
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
