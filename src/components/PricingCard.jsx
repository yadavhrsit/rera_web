import React from 'react';
import { Card, CardHeader, CardContent, Grid, List, ListItem, ListItemText, ListItemIcon, Typography } from '@mui/material';
import PricingButton from './PricingButton';

function PricingCard(props) {
    return (
        <Grid item xs={12} sm={6} md={4} lg={3} key={props.index} sx={{ boxShadow: 3 }}>
            <Card
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                sx={{ backgroundColor: '#116D6E', color: 'white', textAlign: 'center' }}
            >
                <CardHeader
                    title={props.heading}
                    sx={{ marginTop: '20px' }}
                />
                <CardContent sx={{ pt: 0 }}>
                    <Typography variant="h6" component="p" sx={{ mb: 2 }}>
                        {props.pricing}
                    </Typography>
                    <List>
                        {props.benefits.map((benefit, index) => (
                            <ListItem key={index} disableGutters sx={{ py: 1 }}>
                                <ListItemIcon sx={{ ml: 5, color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    {benefit.icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={benefit.text}
                                    sx={{ color: 'white', mr: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                                />
                            </ListItem>
                        ))}
                    </List>
                </CardContent>
                <PricingButton text={'Subscribe'} />
            </Card>
        </Grid>
    );
}

export default PricingCard;
