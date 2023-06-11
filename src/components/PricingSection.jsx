import React from 'react';
import { Grid, } from '@mui/material';
import { SectionContainer, SectionHeading, CardsGrid } from './styledComponents/StyledComponents';
import CheckIcon from '@mui/icons-material/CheckCircleSharp';
import ClearIcon from '@mui/icons-material/Clear';
import PricingCard from './PricingCard';


const PricingSection = () => {
    const pricingData = [
        {
            heading: 'Basic Plan',
            subheading: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam delectus dolorem nisi?',
            pricing: 'Starts at 1111/Month',
            benefits: [
                { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ', icon: <CheckIcon /> },
                { text: 'Lorem ipsum dolor sit amet', icon: <CheckIcon /> },
                { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e', icon: <CheckIcon /> },
                { text: 'Benefit 4', icon: <CheckIcon /> },
                { text: 'Benefit 5', icon: <ClearIcon /> },
                { text: 'Benefit 6', icon: <ClearIcon /> },
                { text: 'Benefit 7', icon: <ClearIcon /> },
                { text: 'Benefit 8', icon: <ClearIcon /> },
            ],
        },
        {
            heading: 'Premium Plan',
            subheading: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam delectus dolorem nisi?',
            pricing: 'Starts at 2222/Month',
            benefits: [
                { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ', icon: <CheckIcon /> },
                { text: 'Lorem ipsum dolor sit amet', icon: <CheckIcon /> },
                { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e', icon: <CheckIcon /> },
                { text: 'Benefit 4', icon: <CheckIcon /> },
                { text: 'Benefit 5', icon: <ClearIcon /> },
                { text: 'Benefit 6', icon: <ClearIcon /> },
                { text: 'Benefit 7', icon: <ClearIcon /> },
                { text: 'Benefit 8', icon: <ClearIcon /> },
            ],
        },
        {
            heading: 'Forever Plan',
            subheading: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam delectus dolorem nisi?',
            pricing: 'Starts at 3333/Month',
            benefits: [
                { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ', icon: <CheckIcon /> },
                { text: 'Lorem ipsum dolor sit amet', icon: <CheckIcon /> },
                { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e', icon: <CheckIcon /> },
                { text: 'Benefit 4', icon: <CheckIcon /> },
                { text: 'Benefit 5', icon: <ClearIcon /> },
                { text: 'Benefit 6', icon: <ClearIcon /> },
                { text: 'Benefit 7', icon: <ClearIcon /> },
                { text: 'Benefit 8', icon: <ClearIcon /> },
            ],
        },
        // Repeat the object structure for other pricing plans
    ];

    return (
        <SectionContainer id='pricing'>
            <SectionHeading sx={{ mb: 3 }}>Select Your Plan</SectionHeading>
            <CardsGrid container display="flex" justifyContent="center" alignItems="center" gap={'25px'} sx={{ marginTop: '20px' }}>
                {
                    pricingData.map(({ heading, subheading, benefits, pricing }, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} sx={{ boxShadow: 10 }}>
                            <PricingCard
                                index={index}
                                heading={heading}
                                subheading={subheading}
                                benefits={benefits}
                                pricing={pricing}
                            />
                        </Grid>
                    ))
                }
            </CardsGrid>
        </SectionContainer>
    );
};

export default PricingSection;
