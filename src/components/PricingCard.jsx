import React from 'react';
import { ListItem, ListItemIcon, Typography } from '@mui/material';
import PricingButton from './PricingButton';
import { ItemCard, CardContentsWrapper } from './styledComponents/StyledComponents';
import { CardHeading, CardSubHeading } from './CardContents';

function PricingCard(props) {
    return (
        <>
            <ItemCard
                key={props.index}
                sx={{ backgroundColor: '#116D6E', color: 'white', textAlign: 'center', }}
            >
                <CardContentsWrapper>
                    <CardHeading heading={props.heading} />
                    <CardSubHeading sx={{ mb: 2 }} subheading={props.pricing} />
                    {
                        props.benefits.map((benefit, index) => (
                            <ListItem key={index} disableGutters >
                                <ListItemIcon sx={{ color: 'white' }}> {benefit.icon} </ListItemIcon>
                                <Typography variant='p' fontSize={'18px'}>{benefit.text}</Typography>
                            </ListItem>
                        ))
                    }
                </CardContentsWrapper>
                <PricingButton text={'Subscribe'} />
            </ItemCard>
        </>
    );
}

export default PricingCard;
