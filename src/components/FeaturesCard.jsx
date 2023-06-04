import React from 'react'
import { Card, CardHeader, CardContent, CardMedia, Typography } from '@mui/material';
function FeaturesCard() {
    return (
        <Card style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: 'white', backgroundColor: '#025464' }}>
            <CardHeader title="Feature 1" />
            <CardMedia
                component="img"
                src="https://placehold.it/450?text=1"
                alt="Image 1"
                style={{ height: '90%' }}
            />
            <CardContent style={{ height: '10%' }}>
                <Typography variant="body2">
                    Text for Feature 1
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam facere optio odit illum nihil repudiandae tenetur aliquam maxime ipsum omnis.
                </Typography>
            </CardContent>
        </Card>
    )
}

export default FeaturesCard