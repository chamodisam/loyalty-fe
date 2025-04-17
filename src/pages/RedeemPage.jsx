import React from 'react';
import { Button } from '@mui/material';

const RedeemPage = () => {
  const handleRedeemClick = () => {
    alert('Points Redeemed!');
  };

  return (
    <div>
      <h2>Redeem Points</h2>
      <Button variant="contained" onClick={handleRedeemClick}>
        Click to Redeem!
      </Button>
    </div>
  );
};

export default RedeemPage;
