import React from 'react'
import { Card, CardContent, Typography } from '@mui/material';
function FeaturesCard(props) {
    return (
        <Card key={props.index} style={{ height: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#212529', backgroundColor: '#dee2e6', padding: '30px 15px 20px 15px' }}>
            <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <Typography variant="h4" sx={{ fontWeight: '600' }}>
                    {props.heading}
                </Typography>
                <Typography variant="p" sx={{ fontWeight: '500' }}>
                    {props.data}
                </Typography>
            </CardContent>
            <div style={{ marginTop: 'auto' }}>
                <img src={props.img} alt="Feature" style={{ width: '100%', height: '100%' }} />
            </div>
        </Card>
    )
}

export default FeaturesCard