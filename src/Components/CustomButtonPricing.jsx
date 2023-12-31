import { Button, styled } from "@mui/material";
import React from "react";

const CustomButtonPricing = ({
  backgroundColor,
  color,
  buttonText,
  heroBtn,
  guideBtn,
  getStartedBtn,
  onClick,

}) => {

  const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: backgroundColor,
    width: "100%",
    color: `${color}!important`,
    fontWeight: "400",
    fontSize: "14px",
    cursor: "pointer",
    padding: "0.5rem 2rem",
    borderRadius: "32px",
    textTransform: "none",
    display: "block",
    border: "2px solid transparent",
    "&:hover": {
      backgroundColor: "transparent",
      color: color,
      borderColor: color,
    },
    [theme.breakpoints.down("md")]: {
      margin: (heroBtn || getStartedBtn) && theme.spacing(0, "auto", 3, "auto"),
      width: (heroBtn || getStartedBtn) && "90%",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: guideBtn && theme.spacing(3),
      width: guideBtn && "90%",
    }
  }));


  return <CustomButton onClick={onClick}>{buttonText}</CustomButton>;
};

export default CustomButtonPricing;
