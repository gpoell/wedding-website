import React from "react";
import ImageContainer from "./../../Components/Sections/ImageContainer/ImageContainer";
import ContentContainer from "./../../Components/Sections/ContentContainer/ContentContainer";
import Typography from "@material-ui/core/Typography";
import venue from "../../Images/venue.jpg";
import { styles } from "./styles";

const Weekend = () => {
  return (
    <>
      <ImageContainer>
        <img src={venue} alt='Kelsey and Garrett' style={styles.photo} />
      </ImageContainer>
      <ContentContainer>
        <Typography variant='h1'>Lake Day</Typography>
        <Typography variant='body1'>
          We are very excited to share our special day with you all and we are
          counting down the days to our big wedding day!
        </Typography>
        <Typography variant='body1'>
          We hope we have provided you with all of the information you will
          need, so please navigate through each of the tabs to find more details
          on our wedding weekend.
        </Typography>
        <Typography variant='body1'>
          Looking forward to seeing you all and feel free to reach out with
          additional questions.
        </Typography>
      </ContentContainer>
      <ContentContainer>
        <Typography variant='h1'>Lake Day</Typography>
        <Typography variant='body1'>
          We are very excited to share our special day with you all and we are
          counting down the days to our big wedding day!
        </Typography>
        <Typography variant='body1'>
          We hope we have provided you with all of the information you will
          need, so please navigate through each of the tabs to find more details
          on our wedding weekend.
        </Typography>
        <Typography variant='body1'>
          Looking forward to seeing you all and feel free to reach out with
          additional questions.
        </Typography>
      </ContentContainer>
      <ImageContainer>
        <img src={venue} alt='Kelsey and Garrett' style={styles.photo} />
      </ImageContainer>
      <ImageContainer>
        <img src={venue} alt='Kelsey and Garrett' style={styles.photo} />
      </ImageContainer>
      <ContentContainer>
        <Typography variant='h1'>Lake Day</Typography>
        <Typography variant='body1'>
          We are very excited to share our special day with you all and we are
          counting down the days to our big wedding day!
        </Typography>
        <Typography variant='body1'>
          We hope we have provided you with all of the information you will
          need, so please navigate through each of the tabs to find more details
          on our wedding weekend.
        </Typography>
        <Typography variant='body1'>
          Looking forward to seeing you all and feel free to reach out with
          additional questions.
        </Typography>
      </ContentContainer>
    </>
  );
};

export default Weekend;
