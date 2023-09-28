import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import Facebook from "../media/social_facebook.svg";
import Instagram from "../media/social_instagram.svg";
import Linkedin from "../media/social_linkedin.svg";
import niviLogo from "../media/LOGO_NIVI.svg"

const facebookUrl = "https://facebook.com";
const instagramUrl = "https://instagram.com";
const linkedinUrl = "https://linkedin.com";

const Footer = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    gap: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  }));

  const FooterText = styled("span")(({ theme }) => ({
    fontSize: "12px",
    color: "#fff",
    fontWeight: "300",
  }));

  const iconUrl = {
    cursor: "pointer",
    color: "#fff",
    backgroundColor: "#fff",
    borderRadius: "50%",
    width: "32px",
    height: "32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <Box sx={{ py: 7, backgroundColor: "#1A192B" }}>
      <CustomContainer>
        <CustomContainer>
          <Box >
            <img src={niviLogo} alt="Nivi" style={{ marginBottom: "32px" }} />
            <IconBox>
              <a href={facebookUrl} style={iconUrl} target="_blank">
                <img src={Facebook} alt="facebook" />
              </a>
              <a href={instagramUrl} style={iconUrl} target="_blank">
                <img src={Instagram} alt="Instagram" />
              </a>
              <a href={linkedinUrl} style={iconUrl} target="_blank">
                <img src={Linkedin} alt="Linkedin" />
              </a>
            </IconBox>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "18px",
                color: "#fff",
                fontWeight: "700",
                mb: 2,
              }}
            >
              CONTÁCTANOS
            </Typography>

            <FooterText>+57 322 - 701 5495</FooterText>
            <br />
            <FooterText>Contacto@novoideass.com</FooterText>
            <br />
            <FooterText>Calle#29 6-07 urbanización bellavista</FooterText>
            <br />
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "18px",
                color: "#fff",
                fontWeight: "700",
                mb: 2,
              }}
            >
              COMPAÑÍA
            </Typography>
            <FooterText>Nuestro equipo</FooterText>
          </Box>
        </CustomContainer>
      </CustomContainer>
      <Box py={0}>
        <Typography
          sx={{
            fontSize: "12px",
            color: "#fff",
            fontWeight: "300",
            textAlign: "center",
            mt: "32px",
          }}
        >
          Copyright © 2023 Novoideas ® Todos los derechos reservados
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
