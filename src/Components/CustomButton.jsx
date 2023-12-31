import { Button, styled } from "@mui/material";
import React from "react";

const CustomButton = ({
  backgroundColor,
  color,
  colorHover,
  colorBorder,
  buttonText,
  heroBtn,
  guideBtn,
  getStartedBtn,
  onClick,
  marginTop,
  width
}) => {
 
  const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: backgroundColor,
    color: color,
    fontWeight: "400",
    fontSize: "14px",
    cursor: "pointer",
    padding: "0.5rem 2rem",
    borderRadius: "32px",
    textTransform: "none",
    display: "block",
    width: width,
    border: "2px solid transparent",
    marginTop: marginTop,
    "&:hover": {
      backgroundColor: "transparent",
      color: colorHover,
      borderColor: colorBorder,
    },
    [theme.breakpoints.down("md")]: {
      margin: (heroBtn || getStartedBtn) && theme.spacing(0, "auto", 3, "auto"),
      width: (heroBtn || getStartedBtn) && "50%",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: guideBtn && theme.spacing(3),
      width: guideBtn && "50%",
    }
  }));
  
  
  return <CustomButton onClick={onClick}>{buttonText}</CustomButton>;
};

export default CustomButton;
