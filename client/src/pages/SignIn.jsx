import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function SignIn() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const inputStyle = {
    width: '80%',
    padding: '12px',
    marginBottom: '15px',
    backgroundColor: '#fff',
    color: '#000',
    border: 'none',
    borderRadius: '6px',
    fontSize: '14px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
  };

  const buttonContainerStyle = {
    width: '80%',
    display: 'flex',
    justifyContent: 'space-between',
    gap: '10px',
    marginTop: '10px'
  };

  const buttonStyle = {
    width: '50%',
    padding: '12px 0',
    fontSize: '16px',
    backgroundColor: '#FFC74F',
    color: '#3d3d3d',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  };

  const grayButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#eee'
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/auth/signin', formData);
      const token = res.data.token;

      login(token); // login with the token
      alert('Login successful!');
      navigate('/profile'); // navigate to profile page
    } catch (err) {
      console.error('Login failed:', err);
      alert('Invalid credentials');
    }
  };

  return (
    <div style={{ minHeight: '100vh', padding: '40px', backgroundColor: '#FCFAE8' }}>
      <div style={{ maxWidth: '400px', margin: '0 auto', color: '#3d3d3d' }}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <div style={buttonContainerStyle}>
            <button type="submit" style={buttonStyle}>
              Sign In
            </button>
            <button
              type="button"
              onClick={() => navigate('/signup')}
              style={grayButtonStyle}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
