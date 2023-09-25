import { Box, Container, styled, Typography } from "@mui/material";
import Grid from '@mui/system/Unstable_Grid';
import React from "react";
import BackGroundImg from "../media/N_OFF.jpg";
import ReactPlayer from 'react-player';
import CustomButton from "./CustomButton";

const About = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    padding: "5px",
    backgroundColor: "#000",
    borderRadius: "15px",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      marginBottom: theme.spacing(4),
    },
  }));
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: theme.spacing(2),
    alignItems: "start",
    flexDirection: "column",
    width: "50%",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));
  const ReactPlayerStyle = {
    width:"490px",
    height: "äuto",
    backgroundColor: "#000",
    padding: "5px 20px",
    borderRadius: "15px",
  };
  const boxStyle = {
    backgroundImage: `url(${BackGroundImg})`, 
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height:'630px'
  };


  return (
  <Box sx={{ py: 10 }} style={boxStyle} id="about">
   <Container >
    <Grid container>
      <Grid md={4} xs={12}>
          <Typography
              variant="body2"
              sx={{
                color: "#1A192B",
                fontSize: "50px",
                fontWeight: "bold",
                mt: 2,
              }}
            >
              Lorem Insum
            </Typography>
            <Typography
          variant="paragrapher"
          sx={{
            color: "#1A192B",
            fontSize: "16px",
            fontWeight: "400",
            mt: 2,
          }}
          >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn.
          </Typography>
          <CustomButton
          backgroundColor="#0F1B4C"
          color="#fff"
          buttonText="Empezar Nivi"
          />
      </Grid>
    <Grid md={8} xs={12} display={"flex"} justifyContent={"center"}>
           <ReactPlayer
               url="https://vimeo.com/328513332"
               controls={true}
               width={"490px"}
               style={ReactPlayerStyle}
             />     
    </Grid>
  </Grid>
  </Container>
  </Box>
    // <Box sx={{ py: 10 }} style={boxStyle}>
    //   <CustomContainer>
    //     <CustomBox>
    //       {/* <img src={logoImg} alt="logo" style={{ maxWidth: "100%" }} /> */}
    //       <Typography
    //         variant="body2"
    //         sx={{
    //           color: "#1A192B",
    //           fontSize: "50px",
    //           fontWeight: "bold",
    //           mt: 2,
    //         }}
    //       >
    //         Lorem Insum
    //       </Typography>
    //       <Typography
    //       variant="paragrapher"
    //       sx={{
    //         color: "#1A192B",
    //         fontSize: "16px",
    //         fontWeight: "400",
    //         mt: 2,
    //       }}
    //       >
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn.
    //       </Typography>
    //       <CustomButton
    //       backgroundColor="#0F1B4C"
    //       color="#fff"
    //       buttonText="Empezar Nivi"
    //     />
    //     </CustomBox>

    //     <CustomBox >
    //       <Container maxWidth="400px">
    //       <ReactPlayer
    //           url="https://vimeo.com/328513332"
    //           controls={true}
    //           width="100%"
    //           height="450px"
    //         />     
    //       </Container>
       
    //       {/* <img src={starsImg} alt="stars" style={{ maxWidth: "100%" }} /> */}
    //     </CustomBox>
    //   </CustomContainer>
    // </Box>
  );
};

export default About;
