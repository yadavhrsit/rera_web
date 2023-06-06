import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
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
                { text: 'Benefit 1', icon: <CheckIcon /> },
                { text: 'Benefit 2', icon: <CheckIcon /> },
                { text: 'Benefit 3', icon: <CheckIcon /> },
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
                { text: 'Benefit 1', icon: <CheckIcon /> },
                { text: 'Benefit 2', icon: <CheckIcon /> },
                { text: 'Benefit 3', icon: <CheckIcon /> },
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
                { text: 'Benefit 1', icon: <CheckIcon /> },
                { text: 'Benefit 2', icon: <CheckIcon /> },
                { text: 'Benefit 3', icon: <CheckIcon /> },
                { text: 'Benefit 4', icon: <CheckIcon /> },
                { text: 'Benefit 5', icon: <ClearIcon /> },
                { text: 'Benefit 6', icon: <ClearIcon /> },
                { text: 'Benefit 7', icon: <ClearIcon /> },
                { text: 'Benefit 8', icon: <ClearIcon /> },
            ],
        },
        // Repeat the object structure for other pricing plans
    ];

    const StyledTypography = styled(Typography)(({ theme }) => ({
        textAlign: 'center',
        fontSize: '80px',
        color: '#454545',
        [theme.breakpoints.down('sm')]: {
            fontSize: '42px',
        },
    }));
    return (
        <Box sx={{ padding: '50px 20px 10px', backgroundColor: '#dee2e6' }}>
            <StyledTypography variant="h2" component="h2">
                Select Your Plan
            </StyledTypography>
            <Grid container display="flex" justifyContent="center" alignItems="center" gap={'20px'} sx={{ marginTop: '20px' }}>
                {pricingData.map((plan, index) => (
                    <PricingCard index={index} heading={plan.heading} subheading={plan.subheading} benefits={plan.benefits} pricing={plan.pricing} />
                ))}
            </Grid>
        </Box>
    );
};

export default PricingSection;
