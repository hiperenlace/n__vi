import React from "react";
import { List, ListItem, ListItemIcon, styled, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CheckIcon from '@mui/icons-material/Check';
import ListItemText from '@mui/material/ListItemText';
import CustomButtonPricing from './CustomButtonPricing';

const CardPricing = ({
  backgroundColor,
  color,
  titulo,
  precio,
  buttonText,
  listItems,
  resaltado,
  onClick,

}) => {

  const TitleCard = styled(Typography)(({ theme }) => ({
    fontSize: "25px",
    color: color,
    fontWeight: "bold",
  }));
  const StyledCard = styled(Card)(({ theme }) => ({
    backgroundColor: backgroundColor,
    color: color,
    border: 'none',
    borderRadius: theme.spacing(2),
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'ease-in-out .2s all',
    "&:hover": {
      transform: 'scale(1.03)'
    }
  }));

  return (
    <StyledCard>
      <CardContent>
        <TitleCard gutterBottom>
          {titulo}
        </TitleCard>
        <List>
          {listItems.map((listItem, index) => (
            <ListItem key={index} sx={{ padding: "0", fontSize: "16px" }}>
              <ListItemIcon sx={{ minWidth: "32px", color: color }}>
                <CheckIcon sx={{ height: 20 }} />
              </ListItemIcon>
              <ListItemText
                primary={listItem}
              />
            </ListItem>
          ))}
        </List>
        <Typography fontWeight={800}>
          <span style={{ fontSize: "14px" }}>$</span><span style={{ fontSize: "42px" }}>{precio}</span><span style={{ fontSize: "14px" }}>/mes</span>
        </Typography>
      </CardContent>
      <CardActions>
        {resaltado ? (
          <CustomButtonPricing
            backgroundColor="#1FB6A3"
            color="#ffffff"
            buttonText={buttonText}
          />
        ) : (
          <CustomButtonPricing
            backgroundColor="#D6D6D9"
            color="#1A192B"
            buttonText={buttonText}
          />
        )}
      </CardActions>
    </StyledCard>

  );
};

export default CardPricing;
