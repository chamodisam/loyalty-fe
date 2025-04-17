import React from 'react';
import { Box, Drawer, Button, Typography } from '@mui/material';
import { Link, Route, Routes, Outlet } from 'react-router-dom';
import EarnPage from '../pages/EarnPage';
import RedeemPage from '../pages/RedeemPage'; // The component for the 'Redeem' page
import HistoryPage from '../pages/HistoryPage';  // The component for the 'History' page

const Layout = () => {
    console.log("eee");
  return (
    <Box display="flex" height="100vh">
      {/* Fixed Sidebar */}
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
            paddingTop: '20px',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Typography variant="h6" sx={{ paddingLeft: '16px' }}>
          Loyalty Program
        </Typography>
        <Button component={Link} to="/earn" sx={{ marginTop: '20px', paddingLeft: '16px' }}>
          Earn
        </Button>
        <Button component={Link} to="/redeem" sx={{ marginTop: '20px', paddingLeft: '16px' }}>
          Redeem
        </Button>
        <Button component={Link} to="/history" sx={{ marginTop: '20px', paddingLeft: '16px' }}>
          History
        </Button>
      </Drawer>

      {/* Main Content Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: '20px',
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
