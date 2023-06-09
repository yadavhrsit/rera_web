import React from 'react';
import { Grid } from '@mui/material';
import { SectionContainer, CardsGrid } from './styledComponents/StyledComponents';
import FeaturesCard from './FeaturesCard';
import FormImage from '../assets/Forms-amico.svg';
import CollabImage from '../assets/Good team-pana.svg';
import Devices from '../assets/Web devices-amico.svg';
import Update from '../assets/App installation-pana.svg';

const Features = () => {

    const features = [
        {
            heading: "Simple way to fill RERA Forms",
            data: "Text for Feature 1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam facere optio odit illum nihil repudiandae tenetur aliquam maxime ipsum omnis.",
            img: FormImage
        },
        {
            heading: "Multiple Platfroms Support",
            data: "Text for Feature 1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam facere optio odit illum nihil repudiandae tenetur aliquam maxime ipsum omnis.",
            img: Devices
        },
        {
            heading: "Easy Collaboration with team",
            data: "Text for Feature 1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam facere optio odit illum nihil repudiandae tenetur aliquam maxime ipsum omnis.",
            img: CollabImage
        },
        {
            heading: "Updated to latest RERA Requirements",
            data: "Text for Feature 1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam facere optio odit illum nihil repudiandae tenetur aliquam maxime ipsum omnis.",
            img: Update
        }
    ]

    return (
        <SectionContainer  >
            <CardsGrid container>
                {features.map((feature, index) => (
                    <Grid item xs={12} sm={6} md={3} lg={2.8}>
                        <FeaturesCard index={index} img={feature.img} heading={feature.heading} data={feature.data} />
                    </Grid>
                ))}
            </CardsGrid>
        </SectionContainer>
    );
};

export default Features;