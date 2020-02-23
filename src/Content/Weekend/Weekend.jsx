import React from "react";
import ImageContainer from "./../../Components/Sections/ImageContainer/ImageContainer";
import ContentContainer from "./../../Components/Sections/ContentContainer/ContentContainer";
import Details from "../../Components/Sections/Details/Details";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { details } from "./details";
import { styles } from "./styles";

const renderDirection = (mobile, index) => {
  let direction = "row-reverse";
  if (mobile) {
    return direction;
  } else if (index % 2 !== 0) {
    direction = "row";
    return direction;
  } else {
    return direction;
  }
};

const Weekend = props => {
  return (
    <>
      {details.map((event, index) => (
        <Grid
          key={index}
          container
          item
          xs={12}
          style={styles.rows}
          direction={renderDirection(props.mobile, index)}
        >
          <ContentContainer>
            <Typography variant='h2'>{event.title}</Typography>
            <Typography variant='body1'>{event.content}</Typography>
            <Details details={event.details} />
          </ContentContainer>
          <ImageContainer>
            <img src={event.image} alt={event.title} style={styles.photo} />
          </ImageContainer>
        </Grid>
      ))}
    </>
  );
};

export default Weekend;
