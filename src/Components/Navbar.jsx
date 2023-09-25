import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import logoImg from "../media/nivi_logo.svg";
import { Container } from "@mui/system";
import CustomButton from "./CustomButton";
import ScrollTo from "./Scroll";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  styled,
} from "@mui/material";
import { useState } from "react";

export const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState({
    left: false,
  });

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
      sx={{ width: "100vw" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["atrás","Incio", "Nosotros", "Comprar", "Contacto"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                {/* <ListItemIcon>
                  {index === 0 && <HomeIcon />}
                  {index === 1 && <FeaturedPlayListIcon />}
                  {index === 2 && <MiscellaneousServicesIcon />}
                  {index === 3 && <ListAltIcon />}
                  {index === 4 && <ContactsIcon />}
                </ListItemIcon> */}
                <ListItemText primary={text} />
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
          <NavLink variant="body2" onClick={() => { ScrollTo("home")}}>Inicio</NavLink>
          <NavLink variant="body2" onClick={() => { ScrollTo("about")}}>Nosotros</NavLink>
          <NavLink variant="body2" onClick={() => { ScrollTo("pricing")}}>Comprar</NavLink>
          <NavLink variant="body2" onClick={() => { ScrollTo("contact")}}>Contacto</NavLink>
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
        <CustomButton
          backgroundColor="#1FB6A3"
          color="#fff"
          buttonText="Ingresar"
        />
      </Box>
    </NavbarContainer>
  );
};

export default Navbar;
