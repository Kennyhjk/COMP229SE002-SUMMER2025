import backend1 from '../assets/ServiceIcons/js.png';
import backend2 from '../assets/ServiceIcons/python.png';
import backend3 from '../assets/ServiceIcons/java.png';
import backend4 from '../assets/ServiceIcons/c-sharp.png';
import frontend1 from '../assets/ServiceIcons/html-5.png';
import frontend2 from '../assets/ServiceIcons/css-3.png';
import frontend3 from '../assets/ServiceIcons/science.png';
import frontend4 from '../assets/ServiceIcons/nodejs.png';
import game1 from '../assets/ServiceIcons/unity.png';
import SQL1 from '../assets/ServiceIcons/sql-server.png';
import tool1 from '../assets/ServiceIcons/github.png';
import tool2 from '../assets/ServiceIcons/social.png';
import tool3 from '../assets/ServiceIcons/notion-icon.png';
import tool4 from '../assets/ServiceIcons/linux.png';

export default function Services() {
  return (
    <div style={{ padding: '40px 20px', maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <h1 style={{ marginBottom: '30px' }}>My Services</h1>
      <div style={{
        width: '60px',
        height: '4px',
        backgroundColor: '#FFC107',
        margin: '0 auto 40px auto',
        borderRadius: '2px'
      }}></div>

      {/* Service 1: Programming */}
      <div style={{
        marginBottom: '30px',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        backgroundColor: '#fff'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '15px',
          marginBottom: '30px',
          flexWrap: 'wrap'
        }}>
          <img src={backend1} alt="backend 1" width="70" />
          <img src={backend2} alt="backend 2" width="70" />
          <img src={backend3} alt="backend 3" width="70" />
          <img src={backend4} alt="backend 4" width="70" />
        </div>
        <h3>Programming</h3>
        <p>I’ve been learning and explored with JavaScript, Python, Java, and C#.</p>
      </div>

      {/* Service 2: Web Technology */}
      <div style={{
        marginBottom: '30px',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        backgroundColor: '#fff'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '15px',
          marginBottom: '30px',
          flexWrap: 'wrap'
        }}>
          <img src={frontend1} alt="frontend 1" width="70" />
          <img src={frontend2} alt="frontend 2" width="70" />
          <img src={frontend3} alt="frontend 3" width="70" />
          <img src={frontend4} alt="frontend 4" width="70" />
        </div>
        <h3>Web Technology</h3>
        <p>I have built basic websites using HTML, CSS, React, and Node.js, and I’m still learning to improve my skills.</p>
      </div>

      {/* Service 3: Game/App Development */}
      <div style={{
        marginBottom: '30px',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        backgroundColor: '#fff'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '15px',
          marginBottom: '30px',
          flexWrap: 'wrap'
        }}>
          <img src={game1} alt="Game App" width="100" />
        </div>
        <h3>Game/App Development</h3>
        <p>I've practiced with Unity for simple game development using C#.</p>
      </div>

      {/* Service 4: Database */}
      <div style={{
        marginBottom: '30px',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        backgroundColor: '#fff'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '15px',
          marginBottom: '30px',
          flexWrap: 'wrap'
        }}>
          <img src={SQL1} alt="database 1" width="70" />
        </div>
        <h3>Database</h3>
        <p>I have written queries in Oracle SQL, and I’m still learning with MongoDB.</p>
      </div>

      {/* Service 5: Tools */}
      <div style={{
        marginBottom: '30px',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        backgroundColor: '#fff'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '15px',
          marginBottom: '30px',
          flexWrap: 'wrap'
        }}>
          <img src={tool1} alt="tool 1" width="70" />
          <img src={tool2} alt="tool 2" width="70" />
          <img src={tool3} alt="tool 3" width="70" />
          <img src={tool4} alt="tool 4" width="70" />
        </div>
        <h3>Tools</h3>
        <p>I have used GitHub, Notion, and Linux, and I’m currently learning to use them more effectively.</p>
      </div>
    </div>
  );
}
