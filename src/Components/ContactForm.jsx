import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import CustomButton from "./CustomButton";


function ContactForm() {
    return (
        <form>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Nombre"
                            variant="standard"
                            name="nombre"
                            className="formNivi" 
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Apellido"
                            variant="standard"
                            name="apellido"
                            className="formNivi"
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Correo Electrónico"
                            variant="standard"
                            type="email"
                            name="email"
                            className="formNivi"
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Número de Teléfono"
                            variant="standard"
                            type="tel"
                            name="telefono"
                            className="formNivi"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Mensaje"
                            variant="standard"
                            multiline
                            rows={2}
                            name="mensaje"
                            className="formNivi"
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <CustomButton
                            backgroundColor="#1FB6A3"
                            color="#fff"
                            buttonText="Enviar mensaje"
                            colorHover="#fff"
                            colorBorder="#fff"
                            heroBtn={true}
                            width="100%"
                            marginTop={"50px"}
                            type="submit"
                        />
                    </Grid>
                </Grid>
        </form>
    );
}

export default ContactForm;