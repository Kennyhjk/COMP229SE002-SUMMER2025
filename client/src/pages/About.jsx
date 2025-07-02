import faceImage from '../assets/Me.png';

export default function About() {
  return (
    <div
      style={{
        padding: '60px 20px',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#FAF8E6'
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: '800px' }}>
        <h1>About Me</h1>
        <div
          style={{
            width: '60px',
            height: '4px',
            backgroundColor: '#FFC107',
            margin: '0 auto 60px',
            borderRadius: '2px'
          }}
        ></div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '100px'
          }}
        >
          <img
            src={faceImage}
            alt="My portrait"
            width="300"
            style={{
              borderRadius: '50%',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}
          />

          <div style={{ textAlign: 'left', maxWidth: '400px' }}>
            <p
              style={{
                fontSize: '1.7rem',
                marginBottom: '10px',
                fontWeight: 'bold'
              }}
            >
              Hyojin Kim
            </p>
            <p>Software Engineering Student</p>
            <p>
              with<br />
              No fixed frame<br />
              I build my span<br />
              I break the load
            </p>
            <h3>Explore Me</h3>
            <a href="/resume.pdf" download>📄 Download My Resume</a>
          </div>
        </div>
      </div>
    </div>
  );
}
