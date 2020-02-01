import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import DirectionsWalkIcon from "@material-ui/icons/DirectionsWalk";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import PhoneIcon from "@material-ui/icons/Phone";
import NotesIcon from "@material-ui/icons/Notes";
import { styles } from "./styles";

const HotelDetails = props => {
  const { option } = props;
  return (
    <Grid container style={styles.details}>
      <Typography variant='subtitle1'>{option.hotel}</Typography>
      <Grid container item xs={12} lg={12} xl={12}>
        <LocationOnOutlinedIcon fontSize='small' style={styles.icons} />
        <Typography variant='subtitle2'>{option.location}</Typography>
      </Grid>
      <Grid container item xs={12} lg={12} xl={12}>
        <PhoneIcon fontSize='small' style={styles.icons} />
        <Typography variant='subtitle2'>{option.phone}</Typography>
      </Grid>
      <Grid container item xs={12} lg={12} xl={12}>
        <DirectionsWalkIcon fontSize='small' style={styles.icons} />
        <Typography variant='subtitle2'>{option.distance}</Typography>
      </Grid>
      {option.notes && (
        <Grid container item xs={12} lg={12} xl={12}>
          <NotesIcon fontSize='small' style={styles.icons} />
          <Typography variant='subtitle2'>{option.notes}</Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default HotelDetails;
