import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import FeaturesCard from './FeaturesCard';

const Features = () => {
    return (
        <Box style={{ display: 'flex', flexDirection: 'column', gap: '30px', padding: '50px 25px 0px' }} >
            <Typography variant='h2' component={'p'} color={'#454545'} align='center'>
                Section Heading
            </Typography>
            <Typography variant='h5' component={'p'} color={'#454545'} align='center'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, ullam?
            </Typography>
            <Typography variant='subtitle1' component={'p'} color={'#454545'} align='center'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, velit accusantium harum at labore asperiores cumque totam sequi, id nam odit incidunt tempore reprehenderit deleniti beatae quibusdam earum. Laborum nesciunt pariatur non sint magni iure. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui porro quod velit nulla aut magni delectus officia sequi praesentium aperiam.
            </Typography>

            <Grid container display="flex" justifyContent="center" alignItems="center" gap={'25px'}>
                <Grid item xs={12} sm={6} md={3} lg={2.8}>
                    <FeaturesCard />
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={2.8}>
                    <FeaturesCard />
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={2.8}>
                    <FeaturesCard />
                </Grid>
                <Grid item xs={12} sm={6} md={3} lg={2.8}>
                    <FeaturesCard />
                </Grid>
            </Grid>
        </Box >
    );
};

export default Features;
