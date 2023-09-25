import * as React from 'react';
import { Box, Container, styled, Typography } from "@mui/material";
import CardPricing from './CardPricing';
const TitlePlan = styled(Typography)(({ theme }) => ({
  fontSize: "30px",
  color: "#1A192B",
  fontWeight: "600",
  textAlign: "center",
  marginBottom:"64px"
 }));
 const listItemsBase = [
  "Lorem Ipsum dolor sit amet 1",
  "Lorem Ipsum dolor sit amet 2",
  "Lorem Ipsum dolor sit amet 3",
  "Lorem Ipsum dolor sit amet 4",
  "Lorem Ipsum dolor sit amet 5",
  "Lorem Ipsum dolor sit amet 6",
];
export default function Pricing() {
  return (
    <Container maxWidth id="pricing" sx={{ paddingY: 8, backgroundColor:"#f4f4f4" }}>
      <TitlePlan variant="h2" color="initial">
      Selecciona el <span style={{ color: '#1FB6A3' }}> plan </span> que prefieras
      </TitlePlan>
    <Box sx={{ minWidth: "275px", maxWidth:"90%", gap:"25px" }} display={"flex"} flexWrap={"wrap"} justifyContent={"center"}>
      <CardPricing
      backgroundColor="#ffffff"
      color="#1A192B"
      titulo="Base 2"
      buttonText="Registrarse con Nivi"
      precio="10"
      listItems={listItemsBase}
      ></CardPricing>
      <CardPricing
      backgroundColor="#ffffff"
      color="#1A192B"
      titulo="Profesional"
      buttonText="Registrarse con Nivi"
      precio="20"
      listItems={listItemsBase}
      ></CardPricing>
      <CardPricing
      backgroundColor="#1A192B"
      color="#fff"
      titulo="Business"
      buttonText="Registrarse con Nivi"
      precio="30"
      listItems={listItemsBase}
      resaltado="SI"
      ></CardPricing>
    </Box>
    </Container>
  );
}