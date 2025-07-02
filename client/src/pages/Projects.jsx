import project1 from '../assets/Projects/health.png';
import project2 from '../assets/Projects/book.png';
import project3 from '../assets/Projects/mobile.png';

export default function Projects() {
  return (
    <div style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>My Projects</h1>
      <div style={{
        width: '60px',
        height: '4px',
        backgroundColor: '#FFC107',
        margin: '0 auto 40px auto',
        borderRadius: '2px'
      }}></div>

      {/* Project 1 */}
      <div style={{ marginBottom: '40px' }}>
        <img src={project1} alt="HealthConnect" width="100%" style={{ borderRadius: '8px' }} />
        <h2 style={{ marginTop: '20px' }}>💊 HealthConnectSystem</h2>
        <p style={{ lineHeight: '1.6', marginBottom: '10px' }}>
          A weather forecast web app built with React and OpenWeatherMap API.  
          Users can check real-time weather information by entering a city name.
        </p>
        <ul style={{ paddingLeft: '20px', lineHeight: '1.8', color: '#555' }}>
          <li><strong>Stack:</strong> React, Node.js, MongoDB, GitHub</li>
          <li><strong>Challenge:</strong> Understanding how to manage form data</li>
          <li><strong>Challenge:</strong> API integration, and component structure in React as a beginner</li>
          <li><strong>Role:</strong> Frontend developer</li>
          <li><strong>Outcome:</strong> Successfully deployed working prototype as a team.</li>
        </ul>
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid #ccc', margin: '40px 0' }} />

      {/* Project 2 */}
      <div style={{ marginBottom: '40px' }}>
        <img src={project2} alt="BookFinder" width="70%" style={{ borderRadius: '8px', display: 'block', margin: '0 auto' }} />
        <h2 style={{ marginTop: '20px' }}>📚 BookFinder</h2>
        <p style={{ lineHeight: '1.6', marginBottom: '10px' }}>
          A web application that allows users to search for books using the Google Books API.  
          Users can view book titles, authors, and descriptions by entering keywords.
        </p>
        <ul style={{ paddingLeft: '20px', lineHeight: '1.8', color: '#555' }}>
          <li><strong>Stack:</strong> Frontend development & API integration</li>
          <li><strong>Challenge:</strong> Handling search input, fetching external data, and displaying results dynamically</li>
          <li><strong>Role:</strong> Search function & API integration</li>
          <li><strong>Outcome:</strong> Completed core functionality and presented in class.</li>
        </ul>
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid #ccc', margin: '40px 0' }} />

      {/* Project 3 */}
      <div>
        <img src={project3} alt="MyPortfolio" width="50%" style={{ borderRadius: '8px', display: 'block', margin: '0 auto' }} />
        <h2 style={{ marginTop: '20px' }}>🖼 MyPortfolio</h2>
        <p style={{ lineHeight: '1.6', marginBottom: '10px' }}>
          A personal portfolio website built with React to showcase my projects, skills, and contact information.  
          The site includes multiple sections like About, Projects, Services, and Contact with responsive design.
        </p>
        <ul style={{ paddingLeft: '20px', lineHeight: '1.8', color: '#555' }}>
          <li><strong>Stack:</strong> React, React Router, CSS</li>
          <li><strong>Challenge:</strong> Structuring components and managing routing across pages as a beginner</li>
          <li><strong>Role:</strong> Full project owner</li>
          <li><strong>Outcome:</strong> Published personal website live using React and GitHub.</li>
        </ul>
      </div>
    </div>
  );
}
