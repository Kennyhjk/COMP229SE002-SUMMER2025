import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/signin');
  };

  return (
    <div style={{ minHeight: '100vh', padding: '40px', backgroundColor: '#FCFAE8' }}>
      <div
        style={{
          maxWidth: '500px',
          margin: '0 auto',
          backgroundColor: '#fff',
          padding: '30px',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          color: '#3d3d3d'
        }}
      >
        <h1 style={{ marginBottom: '20px' }}>My Profile</h1>
        {user ? (
          <>
            <p style={{ marginBottom: '10px' }}>
              <strong>User ID:</strong> {user.id}
            </p>
            <p style={{ marginBottom: '20px' }}>
              <strong>Role:</strong> {user.role}
            </p>
            <button
              onClick={handleLogout}
              style={{
                padding: '12px 24px',
                backgroundColor: '#FFC74F',
                color: '#3d3d3d',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '16px'
              }}
            >
              Log Out
            </button>
          </>
        ) : (
          <p>You are not logged in.</p>
        )}
      </div>
    </div>
  );
}
