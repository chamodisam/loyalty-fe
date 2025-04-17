import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // React Router hook for navigation

import { useAuth } from '../contexts/AuthContext';

const GoogleAuthCallback = () => {
  const navigate = useNavigate();
  const { signIn } = useAuth();

  useEffect(() => {
    // Capture the authorization code from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code'); // This is the Google OAuth code

    if (code) {
      // Send the authorization code to your backend to exchange for a token
      axios.post('http://localhost:8080/auth/exchange', { code })
        .then((response) => {
          const { token, user } = response.data;
          signIn(user);
          
          // Store the token in localStorage or context (e.g., React Context)
          localStorage.setItem('authToken', token);

          // Optionally, navigate to a protected page
          navigate('/'); // Redirect to a protected route after successful login
        })
        .catch((error) => {
          console.error('Error exchanging code:', error);
          alert('Error during login');
        });
    }
  }, [navigate]);

  return <div>Loading...</div>; // Optionally display a loading spinner while waiting for the response
};

export default GoogleAuthCallback;
