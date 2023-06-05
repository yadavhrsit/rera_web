import React from 'react';
import { Card, CardHeader, CardContent, Grid, List, ListItem, ListItemText, ListItemIcon, Typography } from '@mui/material';
import PricingButton from './PricingButton';

function PricingCard(props) {
    return (
        <Grid item xs={12} sm={6} md={3} lg={2.5} key={props.index} sx={{ boxShadow: 3 }}>
            <Card style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} sx={{ backgroundColor: '#116D6E', color: 'white' }}>
                <CardHeader title={props.heading} subheader={<Typography sx={{ color: 'white', }}>{props.subheading}</Typography>} />
                <CardContent>
                    <Typography variant='h6' component="p">
                        {props.pricing}
                    </Typography>
                    <List>
                        {props.benefits.map((benefit, index) => (
                            <ListItem key={index}>
                                <ListItemIcon sx={{ color: 'white' }} >{benefit.icon}</ListItemIcon>
                                <ListItemText primary={benefit.text} />
                            </ListItem>
                        ))}
                    </List>
                </CardContent>
                <PricingButton text={"Subscribe"} />
            </Card>
        </Grid>
    );
}

export default PricingCard;
