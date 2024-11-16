// Logout.jsx
import React from 'react';

const Logout = ({ onLogout }) => {
  const handleLogoutClick = async () => {
    try {
      await onLogout(); // Trigger the onLogout function passed from UserDashboard
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  return (
    <div className="logout-section">
      <button onClick={handleLogoutClick} className="logout-button">Log Out</button>
    </div>
  );
};

export default Logout;
