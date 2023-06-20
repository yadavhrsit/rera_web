import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, Button } from '@mui/material';
import Logo from './logo.svg';

function LoginSection() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [isOTPVerified, setIsOTPVerified] = useState(false);

    const handleEmailLogin = (e) => {
        e.preventDefault();
        // Handle email login logic here
    };

    const handleMobileLogin = (e) => {
        e.preventDefault();
        // Handle mobile login logic here
    };

    const isFormValid = () => {
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        const isValidMobileNumber = /^\d{10}$/.test(mobileNumber);

        return (
            (isValidEmail && password !== '') || (isValidMobileNumber && otp !== '' && isOTPVerified)
        );
    };

    return (
        <Card style={{ margin: 'auto', marginTop: 50, padding: 20 }}>
            <CardContent>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={Logo} alt="Logo" style={{ width: 50, height: 50, marginRight: 10 }} />
                </div>
                <Typography variant="h5" textAlign={'center'} mt={'10px'}>
                    Log In to RERA
                </Typography>
                <Typography variant="subtitle1" mt={'10px'}>
                    Don't have an account? Sign Up
                </Typography>
                <form style={{ display: 'flex', flexDirection: 'column', gap: 24, marginTop: '20px' }}>
                    <TextField
                        label="Email"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        label="Password"
                        variant="outlined"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleEmailLogin}
                        disabled={!isFormValid()}
                    >
                        Log In with Email
                    </Button>
                </form>
                <Typography variant="subtitle1" mt={'10px'} textAlign={'center'}>
                    OR
                </Typography>
                <form style={{ display: 'flex', flexDirection: 'column', gap: 24, marginTop: '20px' }}>
                    <TextField
                        label="Mobile Number"
                        variant="outlined"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        error={mobileNumber !== '' && !/^\d{10}$/.test(mobileNumber)}
                        helperText={
                            mobileNumber !== '' && !/^\d{10}$/.test(mobileNumber) ? 'Mobile number should be 10 digits' : ''
                        }
                    />
                    <TextField
                        label="OTP"
                        variant="outlined"
                        type="password"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleMobileLogin}
                        disabled={!isFormValid()}
                    >
                        Log In with Mobile
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}

export default LoginSection;
