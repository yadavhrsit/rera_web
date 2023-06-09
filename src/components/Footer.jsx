import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { SectionContainer } from './styledComponents/StyledComponents';


const columnStyles = {
    marginBottom: '2rem',
};



const Footer = () => {
    return (
        <SectionContainer greyBackground>
            <footer>
                <Container maxWidth="lg">
                    <Grid container>
                        <Grid item xs={12} sm={6} md={2} style={columnStyles}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                Heading 1
                            </Typography>
                            <Typography variant="p" display="block" >Item 1 </Typography>
                            <Typography variant="p" display="block">Item 2 </Typography>
                            <Typography variant="p" display="block">Item 3 </Typography>
                            <Typography variant="p" display="block">Item 4 </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={2} style={columnStyles}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                Heading 2
                            </Typography>
                            <Typography variant="p" display="block">Item 1 </Typography>
                            <Typography variant="p" display="block">Item 2 </Typography>
                            <Typography variant="p" display="block">Item 3 </Typography>
                            <Typography variant="p" display="block">Item 4 </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={2} style={columnStyles}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                Heading 3
                            </Typography>
                            <Typography variant="p" display="block">Item 1 </Typography>
                            <Typography variant="p" display="block">Item 2 </Typography>
                            <Typography variant="p" display="block">Item 3 </Typography>
                            <Typography variant="p" display="block">Item 4 </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={2} style={columnStyles}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                Heading 4
                            </Typography>
                            <Typography variant="p" display="block">Item 1 </Typography>
                            <Typography variant="p" display="block">Item 2 </Typography>
                            <Typography variant="p" display="block">Item 3 </Typography>
                            <Typography variant="p" display="block">Item 4 </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={2} style={columnStyles}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                Heading 5
                            </Typography>
                            <Typography variant="p" display="block">Item 1 </Typography>
                            <Typography variant="p" display="block">Item 2 </Typography>
                            <Typography variant="p" display="block">Item 3 </Typography>
                            <Typography variant="p" display="block">Item 4 </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={2} style={columnStyles}>
                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                Heading 6
                            </Typography>
                            <Typography variant="p" display="block">Item 1 </Typography>
                            <Typography variant="p" display="block">Item 2 </Typography>
                            <Typography variant="p" display="block">Item 3 </Typography>
                            <Typography variant="p" display="block">Item 4 </Typography>
                        </Grid>
                    </Grid>
                    <Typography variant="h6" display="block" textAlign={'center'}>&copy; Copyright 2023 Rera</Typography>
                </Container>
            </footer>
        </SectionContainer>
    );
};

export default Footer;
