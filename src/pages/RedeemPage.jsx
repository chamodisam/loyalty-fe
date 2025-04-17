import React, { useState } from 'react';
import { Button, CircularProgress, Box } from '@mui/material';
import axios from 'axios';

const RedeemPage = () => {
    const [isLoading, setIsLoading] = useState(false); // For loading state
    const [message, setMessage] = useState(''); // For displaying the message

    // Handle the 'Redeem' button click
    const handleRedeemClick = async () => {

    setIsLoading(true); // Show loading indicator while the request is being made
    setMessage(''); // Clear any previous messages

    try {
        // Construct the request body
        const requestBody = {
        account_id: "7c311d00-ff34-42c7-87ce-3c05680ed2fb",
        points: "10",
        };

        // Make the API request to the backend to redeem points
        const response = await axios.post('http://localhost:8080/api/redeem', requestBody);

        if (response.status === 200) {
        // Successfully redeemed points
        setMessage('Points Redeemed!');
        } else {
        // Handle failure response (if necessary)
        setMessage('Failed to redeem points.');
        }
    } catch (error) {
        // Handle error (e.g., network issue, server error)
        console.error(error);
        setMessage('An error occurred while redeeming points.');
    } finally {
        setIsLoading(false); // Hide loading indicator after the request is complete
    }
    };

    return (
    <div>
        <h2>Redeem Points</h2>
      <Button
        variant="contained"
        onClick={handleRedeemClick}
        disabled={isLoading} // Disable button while loading
        sx={{ marginBottom: '10px' }}
      >
        {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Click to Redeem!'}
      </Button>

      {/* Display success or error message */}
      {message && (
        <Box mt={2} sx={{ color: message === 'Points Redeemed!' ? 'green' : 'red' }}>
          {message}
        </Box>
      )}
    </div>
    );
};

export default RedeemPage;
