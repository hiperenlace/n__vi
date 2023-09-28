import { Box, Container, styled, Typography } from "@mui/material";
import Grid from '@mui/system/Unstable_Grid';
import React from "react";
import BackGroundImg from "../media/N_OFF.jpg";
import BackGroundPlayer from "../media/niviPlayer.png";
import ReactPlayer from 'react-player';
import CustomButton from "./CustomButton";
import ScrollTo from "./Scroll";

const About = () => {
  const Title = styled(Typography)(({ theme }) => ({
    color: "#1A192B",
    fontSize: "50px",
    fontWeight: "bold",
    mt: 2,
    mb: "32px",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
      textAlign: "center"
    },
  }));

  const ReactPlayerStyle = {
    backgroundImage: `url(${BackGroundPlayer})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    maxWidth: "350px",
    with: "350px",
    height: "fit-content",
    maxHeight: "278px",
    backgroundColor: "#000",
    padding: "15px 15px",
    borderRadius: "15px",
  };
  const boxStyle = {
    backgroundImage: `url(${BackGroundImg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '630px'
  };
  return (
    <Box sx={{ py: 10, display: "flex", alignItems: "center" }} style={boxStyle} id="about">
      <Container >
        <Grid container alignItems={"center"}>
          <Grid md={4} xs={12} order={{ xs: 1, md: 0 }} mt={{ xs: "120px", md: 0 }}>
            <Title variant="h2">
              Lorem Insum
            </Title>
            <Typography
              variant="paragrapher"
              sx={{
                color: "#1A192B",
                fontSize: "16px",
                fontWeight: "400",
                mt: 2,
                textAlign: { xs: "center", md: "right" }
              }}

            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn.
            </Typography>
            <CustomButton
              backgroundColor="#1FB6A3"
              color="#fff"
              buttonText="Empezar Nivi"
              marginTop="32px"
              colorHover="#1A192B"
              colorBorder="#1A192B"
              onClick={() => {
                ScrollTo("pricing")
              }}
            />
          </Grid>
          <Grid md={8} xs={12} display={"flex"} justifyContent={"center"}>
            <ReactPlayer
              url="https://vimeo.com/328513332"
              controls={true}
              style={ReactPlayerStyle}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
