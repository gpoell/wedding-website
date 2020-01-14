import React from "react";
import EventIcon from "@material-ui/icons/Event";
import ScheduleIcon from "@material-ui/icons/Schedule";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { styles } from "./styles";

const Details = props => {
  return (
    <>
      <Grid container item xs={12} style={styles.container}>
        <Typography variant='subtitle1'>{props.details.header}</Typography>
      </Grid>
      <Grid container item xs={12} style={styles.container}>
        <EventIcon style={styles.icons} />
        <Typography variant='subtitle2'>{props.details.date}</Typography>
      </Grid>
      <Grid container item xs={12} style={styles.container}>
        <ScheduleIcon style={styles.icons} />
        <Typography variant='subtitle2'>{props.details.time}</Typography>
      </Grid>
      <Grid container item xs={12} style={styles.container}>
        <LocationOnOutlinedIcon style={styles.icons} />
        <Typography variant='subtitle2'>{props.details.location}</Typography>
      </Grid>
    </>
  );
};

export default Details;
