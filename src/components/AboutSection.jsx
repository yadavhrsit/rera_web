import React from 'react'
import { SectionContainer } from './styledComponents/StyledComponents';
import { Button, Grid } from '@mui/material';
import { CardBody, CardHeading } from './CardContents';
import sideImage from '../assets/Working late-amico.svg';

function AboutSection() {
    return (
        <SectionContainer sx={{ paddingBottom: '20px' }}>
            <Grid container spacing={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Grid item xs={12} md={5.6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                    <CardHeading heading={"Lorem ipsum dolor sit amet, consectetur adipiscing elit.sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad "} />
                    <CardBody data={" sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"} />
                    <Button variant="contained"
                        sx={{
                            marginTop: '20px', minHeight: '58px', maxWidth: '360px', '@media (max-width: 600px)': {
                                maxWidth: '100%',
                            }, padding: '10px 60px', fontSize: '20px', fontWeight: 'bold', borderRadius: '12px', textTransform: 'none'
                        }}>
                        Download The App
                    </Button>
                </Grid>
                <Grid item xs={12} md={6} sx={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center', '@media (max-width: 600px)': {
                        display: 'none',
                    }
                }}>
                    <img src={sideImage} alt="" style={{ objectFit: 'contain' }} height={'500px'} width={'90%'} />
                </Grid>
            </Grid>
        </SectionContainer>
    )
}

export default AboutSection