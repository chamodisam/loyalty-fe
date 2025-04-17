import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CircularProgress, Box, Typography } from '@mui/material';

const HistoryPage = () => {
  const [balance, setBalance] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/balance?account_id=7c311d00-ff34-42c7-87ce-3c05680ed2fb');
        
        setBalance(response.data.balance);
      } catch (err) {
        setError('Failed to fetch loyalty balance.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchBalance();
  }, []);

  return (
    <div>
      <h2>History</h2>
      
      {isLoading ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : (
        <Typography variant="h6">Your loyalty points balance is: {balance}</Typography>
      )}
    </div>
  );
};

export default HistoryPage;
