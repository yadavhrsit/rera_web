import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, Button, MenuItem } from '@mui/material';
import Logo from './logo.svg';

const professions = [
    { value: 'CA', label: 'Chartered Accountant' },
    { value: 'Architect', label: 'Architect' },
    { value: 'RCC Consultant', label: 'RCC Consultant' },
];

function RegisterSection() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [selectedProfession, setSelectedProfession] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [isOTPVerified, setIsOTPVerified] = useState(false);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleProfessionChange = (e) => {
        setSelectedProfession(e.target.value);
    };

    const handleMobileNumberChange = (e) => {
        setMobileNumber(e.target.value);
    };

    const handleOTPChange = (e) => {
        setOtp(e.target.value);
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        // Handle sign up logic here
    };

    const isFormValid = () => {
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        const isValidMobileNumber = /^\d{10}$/.test(mobileNumber);
        const isValidPassword = /^.{6,16}$/.test(password);

        return (
            username !== '' &&
            username.length <= 20 &&
            isValidEmail &&
            password !== '' &&
            confirmPassword !== '' &&
            password === confirmPassword &&
            selectedProfession !== '' &&
            isValidMobileNumber &&
            otp !== '' &&
            isOTPVerified &&
            isValidPassword
        );
    };

    return (
        <Card style={{ margin: 'auto', marginTop: 50, padding: 20 }}>
            <CardContent>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={Logo} alt="Logo" style={{ width: 50, height: 50, marginRight: 10 }} />
                </div>
                <Typography variant="h5" textAlign={'center'} mt={'10px'}>
                    Sign Up for RERA
                </Typography>
                <Typography variant="subtitle1" mt={'10px'}>
                    Already have an account? Log In
                </Typography>
                <form style={{ display: 'flex', flexDirection: 'column', gap: 24, marginTop: '20px' }}>
                    <TextField
                        label="Username"
                        variant="outlined"
                        value={username}
                        onChange={handleUsernameChange}
                        error={username !== '' && username.length > 20}
                        helperText={username !== '' && username.length > 20 ? 'Username should be maximum 20 characters' : ''}
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        value={email}
                        onChange={handleEmailChange}
                        error={email !== '' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)}
                        helperText={email !== '' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? 'Invalid email' : ''}
                    />
                    <TextField
                        label="Password"
                        variant="outlined"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        error={password !== '' && !/^.{6,16}$/.test(password)}
                        helperText={
                            password !== '' && !/^.{6,16}$/.test(password) ? 'Password should be 6 to 16 characters' : ''
                        }
                    />
                    <TextField
                        label="Confirm Password"
                        variant="outlined"
                        type="password"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        error={confirmPassword !== '' && confirmPassword !== password}
                        helperText={confirmPassword !== '' && confirmPassword !== password ? 'Passwords do not match' : ''}
                    />
                    <TextField
                        label="Profession"
                        variant="outlined"
                        select
                        value={selectedProfession}
                        onChange={handleProfessionChange}
                    >
                        {professions.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        label="Mobile Number"
                        variant="outlined"
                        value={mobileNumber}
                        onChange={handleMobileNumberChange}
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
                        onChange={handleOTPChange}
                    />
                    <Button variant="contained" color="primary" onClick={handleSignUp} disabled={!isFormValid()}>
                        Sign Up
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}

export default RegisterSection;
