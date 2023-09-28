import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import LogoCarousel from './BrandsCarousel';
import React from "react";
const TitlePlan = styled(Typography)(({ theme }) => ({
  fontSize: "30px",
  color: "#1A192B",
  fontWeight: "600",
  textAlign: "center",
  marginBottom: "64px"
}));
const Brands = () => {
  return (
    <Container sx={{ paddingY: "100px" }}>
      <TitlePlan variant="h2" color="initial">
        Marcas que confían en nosotros
      </TitlePlan>
      <Typography variant="body1" color="#1A192B" fontSize={25} textAlign="center">

      </Typography>
      <LogoCarousel />
    </Container>
  );
};
export default Brands;
