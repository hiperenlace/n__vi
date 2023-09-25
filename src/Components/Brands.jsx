import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import LogoCarousel from './BrandsCarousel';
import React from "react";


const Brands = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: theme.spacing(2),
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));
  return (
    <Container py={"50px"}>
      <Typography variant="body1" color="#000" textAlign="center">
        Marcas que confían en nosotros
      </Typography>
    <LogoCarousel/>
    </Container>
  );
};

export default Brands;
