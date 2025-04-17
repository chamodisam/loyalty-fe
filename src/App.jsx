import { useState } from 'react'
import './App.css'
import SignUpPage from './pages/SignUpPage'
import Page from './Page';
import { useAuth, AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GoogleAuthCallback from './pages/GoogleAuthCallback';
import Layout from './components/Layout';

import EarnPage from './pages/EarnPage';
import RedeemPage from './pages/RedeemPage';
import HistoryPage from './pages/HistoryPage';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<AuthCheck />} />
          <Route path="/auth/google/callback" element={<GoogleAuthCallback />} />

          {/* Protected Routes */}
          {/* <Route element={<ProtectedRoute />}> */}
          <Route path="/" element={<Layout />}>
              <Route path="earn" element={<EarnPage />} />
              <Route path="redeem" element={<RedeemPage />} />
              <Route path="history" element={<HistoryPage />} />
            </Route>
          {/* </Route> */}
        </Routes>
      </Router>
    </AuthProvider>
  );
};

const AuthCheck = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Layout /> : <SignUpPage />;
};

// Protected Route: Ensures that only authenticated users can access protected pages
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <SignUpPage />; // If not authenticated, redirect to SignUpPage
  }
  return children;
};

export default App
