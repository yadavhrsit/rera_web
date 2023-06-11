import React from 'react'
import { SectionContainer } from './styledComponents/StyledComponents';
import { Button, Grid } from '@mui/material';
import { CardBody, CardHeading } from './CardContents';
import sideImage from '../assets/Working late-amico.svg';
import appleIcon from '../assets/app-store.svg';
import windowsIcon from '../assets/windows.svg';
import androidIcon from '../assets/playstore-svgrepo-com.svg';

function AboutSection() {
    const userAgent = navigator.userAgent;

    // Check if the user is on a Windows PC
    const isWindows = /Windows/.test(userAgent);

    // Check if the user is on an Android phone
    const isAndroid = /Android/.test(userAgent);

    // Check if the user is on an iOS device (iPhone or iPad)
    const isiOS = /iPhone|iPad|iPod/.test(userAgent);

    // Check if the user is on a Mac
    const isMac = /Macintosh/.test(userAgent);

    let icon = "";

    if (isWindows) {
        icon = windowsIcon;
    } else if (isAndroid) {
        icon = androidIcon;
    } else if (isiOS) {
        icon = appleIcon;
    } else if (isMac) {
        icon = appleIcon;
    }

    return (
        <SectionContainer id='about' sx={{ paddingBottom: '20px', marginTop: '40px' }}>
            <Grid container spacing={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Grid item xs={12} md={5.6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                    <CardHeading heading={"Lorem ipsum dolor sit amet, consectetur adipiscing elit.sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad "} />
                    <CardBody data={" sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"} />
                    <Button variant="contained"
                        sx={{
                            marginTop: '20px', minHeight: '58px', width: '300px', '@media (max-width: 600px)': {
                                width: '100%',
                            }, padding: '10px 10px', fontSize: '20px', fontWeight: 'bold', borderRadius: '12px', textTransform: 'none', backgroundColor: '#424242'
                        }}>
                        Download App <img src={icon} alt='' style={{ height: '35px', marginLeft: '20px' }}></img>
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