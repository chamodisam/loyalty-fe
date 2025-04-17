import React, { useState } from 'react';
import { Button, TextField, Box, Typography, Link } from '@mui/material';
import axios from 'axios';
import GoogleIcon from '@mui/icons-material/Google';

const SignUpPage = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSignUp = async () => {
    console.log('Sign up with email:', email);
    // Add your sign-up logic here

    try {
        const response = await axios.get('http://localhost:8080/auth/google');
  
        // Assuming the response contains some authentication data like a token
        if (response.status === 200 && response.data.redirectUrl) {
            // Redirect to the Google OAuth page
            window.location.href = response.data.redirectUrl;
          } else {
            alert('Failed to initiate Google sign-up');
          }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred during sign up');
      } finally {
        setIsLoading(false);  // Stop loading when request completes
      }
  };

  const handleGoogleSignUp = async () => {
    console.log('Sign up with Google');
    // Add your sign-up logic here

    try {
        const response = await axios.get('http://localhost:8080/auth/google');
  
        // Assuming the response contains some authentication data like a token
        if (response.status === 200 && response.data.redirectUrl) {
            // Redirect to the Google OAuth page
            window.location.href = response.data.redirectUrl;
          } else {
            alert('Failed to initiate Google sign-up');
          }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred during sign up');
      } finally {
        setIsLoading(false);  // Stop loading when request completes
      }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        // height: '100vh',
        textAlign: 'center',
        backgroundColor: '#f8f8f8',
        padding: '70px 20px',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Loyalty App
      </Typography>

      <Typography variant="h6" color="text.secondary" gutterBottom>
        Create an account
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        Enter your email to sign up for this app
      </Typography>

      {/* Email Input */}
      <TextField
        label="email@domain.com"
        variant="outlined"
        fullWidth
        value={email}
        onChange={handleEmailChange}
        sx={{
          marginBottom: '20px',
          maxWidth: '400px',
        }}
      />

      {/* Sign up button */}
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleSignUp}
        sx={{
          marginBottom: '10px',
          maxWidth: '400px',
        }}
      >
        Sign up with email
      </Button>

      {/* Google Sign Up Button */}
      <Button
        variant="outlined"
        startIcon={<GoogleIcon />}
        fullWidth
        onClick={handleGoogleSignUp}
        sx={{
          marginBottom: '20px',
          maxWidth: '400px',
        }}
      >
        Google
      </Button>

      {/* Terms and Privacy Policy */}
      <Typography variant="body2" color="text.secondary">
        By clicking continue, you agree to our{' '}
        <Link href="#" underline="hover">
          Terms of Service
        </Link>{' '}
        and{' '}
        <Link href="#" underline="hover">
          Privacy Policy
        </Link>
      </Typography>
    </Box>
  );
};

export default SignUpPage;
