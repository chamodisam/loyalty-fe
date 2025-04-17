import React, { useState } from 'react';
import { Button, CircularProgress, Box } from '@mui/material';
import axios from 'axios';

const EarnPage = () => {
  const [isLoading, setIsLoading] = useState(false); // For loading state
  const [message, setMessage] = useState(''); // For displaying the message

  const handleEarnClick = async () => {
    setIsLoading(true); // Show loading indicator while the request is being made
    setMessage(''); // Clear any previous messages

    try {

        const requestBody = {
            account_id: "7c311d00-ff34-42c7-87ce-3c05680ed2fb",
            points: "10",
          };
    
          // Make the API request to the backend to earn points
          const response = await axios.post('http://localhost:8080/api/earn', requestBody);

      if (response.status === 200) {
        // Successfully earned points
        setMessage('Points Earned!');
      } else {
        // Handle failure response (if necessary)
        setMessage('Failed to earn points.');
      }
    } catch (error) {
      // Handle error (e.g., network issue, server error)
      console.error(error);
      setMessage('An error occurred while earning points.');
    } finally {
      setIsLoading(false); // Hide loading indicator after the request is complete
    }
  };

  return (
    <div>
      <h2>Earn Points</h2>

      {/* Button to trigger earning points */}
      <Button
        variant="contained"
        onClick={handleEarnClick}
        disabled={isLoading} // Disable button while loading
      >
        {isLoading ? <CircularProgress size={24} color="inherit" /> : 'Click to Earn!'}
      </Button>

      {/* Display success or error message */}
      {message && (
        <Box mt={2} sx={{ color: message === 'Points Earned!' ? 'green' : 'red' }}>
          {message}
        </Box>
      )}
    </div>
  );
};

export default EarnPage;
