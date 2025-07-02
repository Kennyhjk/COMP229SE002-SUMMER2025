import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ padding: '60px 20px', textAlign: 'center', color: '#3d3d3d', backgroundColor: '#FCFAE8'}}>
        <h1 style={{ fontSize: '4.5rem', marginBottom: '80px', fontWeight: 900 , color: '#A3B18A' }}>
            Think<br /> 
            Talk<br />
            Create<br /> </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
            Welcome to My Portfolio</p>

      <blockquote style={{ 
        fontStyle: 'italic', 
        margin: '40px auto', 
        maxWidth: '700px', 
        backgroundColor: '#FFFFFF',
        padding: '30px',
        borderRadius: '8px' 
      }}>
         “Innovation begins when great minds come together."<br />
         "I strive to become a developer who creates a better tomorrow by continuously learning,
         challenging myself, and thinking beyond the conventional boundaries with my team.”
      </blockquote>

      <Link to="/about">
        <button style={{
          padding: '12px 24px',
          fontSize: '16px',
          backgroundColor: '#A3B18A',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '20px'
        }}>
          About Me
        </button>
      </Link>
    </div>
  );
}
