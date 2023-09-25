import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';

// const listItems = [
//   "Lorem Ipsum dolor sit amet",
//   "Lorem Ipsum dolor sit amet",
//   "Lorem Ipsum dolor sit amet",
//   "Lorem Ipsum dolor sit amet",
//   "Lorem Ipsum dolor sit amet",
//   "Lorem Ipsum dolor sit amet",
// ];

const Contact = () => {
    return(
        <Container id="contact">
        <TextField id="1" label="Nombre" variant="standard" />
        <TextField id="2" label="Apellido" variant="standard" />
        <TextField id="3" label="Correo Electrónico" variant="standard" />
        <TextField id="4" label="Número de teléfono" variant="standard" />
        <TextField id="5" label="Mensaje" variant="standard" />
        </Container>
    );
}


export default Contact;