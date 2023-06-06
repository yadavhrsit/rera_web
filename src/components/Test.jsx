import React from 'react';
import './PriceCard.css'; // Import the CSS file for styling

import { Card, CardContent, Typography, Button } from '@mui/material';

const PriceCard = () => {
    return (
        <Card className="price-card">
            <CardContent>
                <Typography variant="h5" component="h2" className="title">
                    Basic Plan
                </Typography>
                <Typography variant="h3" component="h2" className="price">
                    $9.99/month
                </Typography>
                <ul className="features">
                    <li className="feature-item">5GB Storage</li>
                    <li className="feature-item">10GB Bandwidth</li>
                    <li className="feature-item">10 Email Accounts</li>
                </ul>
            </CardContent>
            <Button variant="contained" color="primary" className="button">
                Get Started
            </Button>
        </Card>
    );
};

export default PriceCard;
