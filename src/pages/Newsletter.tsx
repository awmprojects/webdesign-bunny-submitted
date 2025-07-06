import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Newsletter = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Set cookie to indicate user has seen the popup
    const expiryDate = new Date();
    expiryDate.setTime(expiryDate.getTime() + (30 * 24 * 60 * 60 * 1000)); // 30 days
    document.cookie = `popup_seen=true; expires=${expiryDate.toUTCString()}; path=/`;
    
    // Auto-redirect to register page
    navigate('/register');
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Redirecting...</h1>
        <p className="text-gray-600">Please wait while we redirect you to the registration page.</p>
      </div>
    </div>
  );
};

export default Newsletter;