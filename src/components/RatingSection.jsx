import React, { useState } from 'react';
import { Rating } from '@mui/material';
import { styled } from '@mui/system';
import StarIcon from '@mui/icons-material/Star';
import { SectionContainer, SectionHeading } from './styledComponents/StyledComponents';
import { CardHeading, CardSubHeading } from './CardContents';

// Custom styled component for the golden hover effect
const GoldenRating = styled(Rating)(({ theme }) => ({
    '& .MuiRating-iconEmpty': {
        color: '#ccc', // Grey color for empty stars
        fontSize: 86, // Default size for larger screens
    },
    '& .MuiRating-iconFilled': {
        color: '#ffc107', // Golden color for filled stars
        fontSize: 86, // Default size for larger screens
    },
    [theme.breakpoints.down('sm')]: {
        '& .MuiRating-iconEmpty': {
            fontSize: 44, // Size for mobile devices
        },
        '& .MuiRating-iconFilled': {
            fontSize: 44, // Size for mobile devices
        },
    },
}));

const RatingComponent = () => {
    const [rating, setRating] = useState(0);

    const handleRatingChange = (event, newRating) => {
        setRating(newRating);
    };

    return (
        <SectionContainer id='rateus' sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px', color: '#212529' }}>
            <SectionHeading>Rate Our Service</SectionHeading>
            <CardSubHeading subheading={"Click on a star to rate it!"} />
            <GoldenRating
                name="customized-color"
                value={rating}
                precision={0.5}
                onChange={handleRatingChange}
                emptyIcon={<StarIcon fontSize="inherit" />}
            />
        </SectionContainer>
    );
};

export default RatingComponent;
