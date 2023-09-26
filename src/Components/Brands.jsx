import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import LogoCarousel from './BrandsCarousel';
import React from "react";
const Brands = () => {
    return (
    <Container sx={{paddingY:"100px"}}>
      <Typography variant="body1" color="#1A192B" fontSize={25} textAlign="center">
        Marcas que confían en nosotros
      </Typography>
    <LogoCarousel/>
    </Container>
  );
};

export default Brands;
