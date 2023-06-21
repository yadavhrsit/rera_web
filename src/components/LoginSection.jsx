import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, Button } from '@mui/material';
import Logo from './logo.svg';

function LoginSection() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [isOTPVerified, setIsOTPVerified] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [mobileNumberError, setMobileNumberError] = useState('');
    const [otpError, setOtpError] = useState('');

    const handleEmailLogin = (e) => {
        e.preventDefault();
        if (isFormValid1()) {
            // Perform email login logic here
        } else {
            // Display an error message or handle invalid form
        }
    };

    const handleMobileLogin = (e) => {
        e.preventDefault();
        // Handle mobile login logic here
    };

    const handleEmailBlur = () => {
        setEmailError(!isValidEmail(email) ? 'Invalid email address' : '');
    };

    const handlePasswordBlur = () => {
        setPasswordError(!isValidPassword(password) ? 'Invalid password' : '');
    };

    const handleMobileNumberBlur = () => {
        setMobileNumberError(!isValidMobileNumber(mobileNumber) ? 'Mobile number should be 10 digits' : '');
    };

    const handleOtpBlur = () => {
        setOtpError(!isValidOtp(otp) ? 'OTP should be 6 digits' : '');
    };

    const isValidEmail = (value) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    };

    const isValidPassword = (value) => {
        return value.length >= 6 && value.length <= 16;
    };

    const isValidMobileNumber = (value) => {
        return /^\d{10}$/.test(value);
    };

    const isValidOtp = (value) => {
        return /^\d{6}$/.test(value);
    };

    const isFormValid1 = () => {
        return isValidEmail(email) && isValidPassword(password);
    };

    const isFormValid2 = () => {
        return isValidMobileNumber(mobileNumber) && otp !== '' && isOTPVerified;
    };

    const isFormValid3 = () => {
        return isValidOtp(otp) && otp !== '';
    };

    return (
        <Card
            style={{
                margin: 'auto',
                marginTop: 50,
                padding: 20,
                position: 'absolute',
                top: 25,
                right: 15,
                backgroundColor: 'whitesmoke',
                border: '2px solid grey',
            }}
        >
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
                        onBlur={handleEmailBlur}
                        error={emailError !== ''}
                        helperText={emailError}
                    />
                    <TextField
                        label="Password"
                        variant="outlined"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onBlur={handlePasswordBlur}
                        error={passwordError !== ''}
                        helperText={passwordError}
                    />
                    <Button variant="contained" color="primary" onClick={handleEmailLogin} disabled={!isFormValid1()}>
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
                        onBlur={handleMobileNumberBlur}
                        error={mobileNumberError !== ''}
                        helperText={mobileNumberError}
                    />
                    <div>
                        <TextField
                            label="OTP"
                            variant="outlined"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            onBlur={handleOtpBlur}
                            sx={{ width: '190px' }}
                            error={otpError !== ''}
                            helperText={otpError}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={setIsOTPVerified}
                            disabled={!isFormValid3()}
                            sx={{ padding: '16px', marginLeft: '10px' }}
                        >
                            Verify
                        </Button>
                    </div>
                    <Button variant="contained" color="primary" onClick={handleMobileLogin} disabled={!isFormValid2()}>
                        Log In with Mobile
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}

export default LoginSection;
