import * as React from "react";
import { Box, Container, Grid } from "@mui/material";
import ContactForm from "./ContactForm";
import BackGroundImg from "../media/CONTACT.jpg";
const boxStyle = {
    backgroundImage: `url(${BackGroundImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center",
    minHeight: "630px"
};

const Contact = () => {
    return (
        <Box sx={{ py: 10, display: "flex", alignItems: "center", height: "630px" }} style={boxStyle} id="about">
            <Container id="contact">
                <Grid container spacing={2}>
                    <Grid item xs={7}>
                        <ContactForm></ContactForm>
                    </Grid>
                </Grid>

            </Container>
        </Box>
    );
}
export default Contact;