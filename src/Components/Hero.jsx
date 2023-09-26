import { Box, Button, styled, Typography } from "@mui/material";
import Grid from '@mui/system/Unstable_Grid';
import { Container } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";
import heroImg from "../media/nivi_hero_off.png";
import CustomButton from "./CustomButton";
import ScrollTo from "./Scroll";
const Hero = () => {
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
        <Grid container alignItems={"center"}>
        <Grid md={4} xs={12} order={{ xs: 1, md: 0 }} >
            <Title variant="h1">
              Asigna de forma automática
              tus clientes en <span style={{ color: '#1FB6A3' }}> WhatsApp </span>
              y optimiza tus ventas
            </Title>
            <Typography variant="body1" color="#ffffff" marginBottom="20px" display={{ xs: 'none', md: 'block' }}>
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
          </Grid>
          <Grid md={8} xs={12} display={"flex"} flexDirection={"column"} justifyContent="center">
            <img
              src={heroImg}
              alt="heroImg"
              // style={{ maxWidth: "100%" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
