import * as React from "react";
import { Box } from '@mui/system';
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import logoImg from "../media/nivi_logo.svg";
import { Container } from "@mui/system";
import CustomButton from "./CustomButton";
import ScrollTo from "./Scroll";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Drawer from '@mui/material/Drawer';
import '../index.css';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  styled,
} from "@mui/material";
import { useState } from "react";
const drawStyle = {
  backgroundColor: '#000',
  display: 'flex',
  alignItems: 'stretch',
};

export const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState({
    left: false,
  });
  const listLinks =
    [{
      text: "Inicio",
      link: "home"
    },
    {
      text: "Nosotros",
      link: "about"
    },
    {
      text: "Comprar",
      link: "pricing"
    },
    {
      text: "Contacto",
      link: "contact"
    }
    ];
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.type === "Tab" || event.type === "Shift")
    ) {
      return;
    }

    setMobileMenu({ ...mobileMenu, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: "100vw", height: "100vh" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={drawStyle}
    >
      <List sx={{ width: "100%" }}>
        <ListItem disablePadding>
          <ListItemButton>
            <ArrowBackIosNewIcon sx={{ fill: "#fff" }} />
          </ListItemButton>
        </ListItem>
        <ListItem sx={{ justifyContent: "center" }}>
          <CustomButton
            backgroundColor="#1FB6A3"
            color="#fff"
            colorHover="#fff"
            colorBorder="#fff"
            buttonText="Ingresar"
          />
        </ListItem>

        {listLinks.map((item, index) => (
          <ListItem key={index} disablePadding className="custom-hover-color">
            <ListItemButton >
              <ListItemText primary={item.text} sx={{ textAlign: "center" }} onClick={() => { ScrollTo(item.link) }} />
            </ListItemButton>
          </ListItem>
        )
        )}

      </List>
    </Box>
  );
  const NavLink = styled(Typography)(({ theme }) => ({
    fontSize: "14px",
    color: "#ffffff",
    fontWeight: "400",
    cursor: "pointer",
    "&:hover": {
      color: "#1FB6A3",
    },
  }));
  const NavbarLinksBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
    gap: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: "pointer",
    display: "none",
    marginRight: theme.spacing(2),
    color: "#fff",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  }));

  const NavbarContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2),
    },
  }));

  const NavbarLogo = styled("img")(({ theme }) => ({
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  }));
  return (
    <NavbarContainer id="home">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.5rem",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <NavbarLogo src={logoImg} alt="logo" />
        </Box>
      </Box>
      <Box>
        <NavbarLinksBox>
          {listLinks.map((item, index) => (
            <NavLink key={index} variant="body2" onClick={() => { ScrollTo(item.link) }}>{item.text}</NavLink>
          ))}
        </NavbarLinksBox>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0",
        }}
      >
        <CustomMenuIcon onClick={toggleDrawer("right", true)} />
        <Drawer
          anchor="right"
          open={mobileMenu["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
        <Box display={{ xs: 'none', md: 'block' }}>
          <CustomButton
            backgroundColor="#1FB6A3"
            color="#fff"
            colorHover="#fff"
            colorBorder="#fff"
            buttonText="Ingresar"
          />
        </Box>
      </Box>
    </NavbarContainer>
  );
};

export default Navbar;
