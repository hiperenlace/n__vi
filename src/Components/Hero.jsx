import { Box, Button, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";
import heroImg from "../media/nivi_hero_off.png";
import CustomButton from "./CustomButton";
import ScrollTo from "./Scroll";
const Hero = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(10),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "25px",
    color: "#ffffff",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));
  return (
    <Box sx={{ backgroundColor: "#4C4C58", minHeight: "100vh" }}>
      <Container>
        <Navbar />
        <CustomBox>
          <Box 
          sx={{ 
            flex: "1", 
            display:"flex", 
            flexDirection: "column", 
            alignItems:"start", 
            justifyContent:"center" 
            }}>
            <Title variant="h1">
              Asigna de forma automática <br></br>
              tus clientes en <span style={{ color: '#1FB6A3' }}> WhatsApp </span><br></br>
              y optimiza tus ventas
            </Title>
            <Typography variant="body1" color="#ffffff" marginBottom="20px">
            No pierdas más oportunidades comerciales. Integra el WhatsApp oficial de tu marca con NIVI y atiende a tus clientes en menor tiempo.
            </Typography>
            <CustomButton
              backgroundColor="#1FB6A3"
              color="#fff"
              buttonText="Comprar Nivi"
              heroBtn={true}
              onClick={() => {
                ScrollTo("pricing")
              }}
            />
          </Box>

          <Box sx={{ flex: "1.25" }}>
            <img
              src={heroImg}
              alt="heroImg"
              style={{ maxWidth: "100%" }}
            />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};

export default Hero;
