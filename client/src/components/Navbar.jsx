import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useAuth } from '../context/AuthContext'; 

export default function Navbar() {
  const { user, logout } = useAuth(); 
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/signin');
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
  };

  return (
    <nav style={{
      backgroundColor: '#111',
      padding: '1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '2rem',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      {/* Logo */}
      <img
        src={logo}
        alt="Logo"
        style={{
          height: '100px',
          marginRight: '16px',
          position: 'absolute',
          left: '20px',
          marginTop: '15px'
        }}
      />

      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/projects" style={linkStyle}>Projects</Link>
      <Link to="/services" style={linkStyle}>Services</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>

      {/* 로그인 상태에 따라 메뉴 전환 */}
      {user ? (
        <>
          <Link to="/profile" style={linkStyle}>My Profile</Link>
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: '#eee',
              color: '#111',
              border: 'none',
              padding: '6px 12px',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Log Out
          </button>
        </>
      ) : (
        <>
          <Link to="/signin" style={linkStyle}>Sign In</Link>
          <Link to="/signup" style={linkStyle}>Sign Up</Link>
        </>
      )}
    </nav>
  );
}
