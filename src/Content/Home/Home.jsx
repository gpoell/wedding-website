import React from "react";
import ImageContainer from "./../../Components/Sections/ImageContainer/ImageContainer";
import ContentContainer from "./../../Components/Sections/ContentContainer/ContentContainer";
import Typography from "@material-ui/core/Typography";
import home1 from "../../Images/home1.JPEG";
import { styles } from "./styles";

const Home = () => {
  return (
    <>
      <ContentContainer>
        <Typography variant='h2'>Welcome</Typography>
        <Typography variant='body1'>
          We are very excited to share our special day with you all and we are
          counting down the days to our big wedding day!
        </Typography>
        <Typography variant='body1'>
          The wedding will take place in the heart of the beautiful town,
          Highlands. This place is very special to us ever since we started
          frequently visiting back when we first started dating.
        </Typography>
        <Typography variant='body1'>
          Hopefully this website serves as the source for all of your answers,
          so please navigate through each of the tabs to find more details on
          our wedding weekend.
        </Typography>
      </ContentContainer>
      <ImageContainer>
        <img src={home1} alt='Kelsey and Garrett' style={styles.photo} />
      </ImageContainer>
    </>
  );
};

export default Home;
