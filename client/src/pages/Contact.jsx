import { useState }   from 'react';
import { useNavigate } from 'react-router-dom';
import axios          from 'axios';

export default function Contact() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });

  const inputStyle = {
    width: '100%',
    padding: '12px',
    marginBottom: '15px',
    backgroundColor: '#fff',
    color: '#000',
    border: 'none',
    borderRadius: '6px',
    fontSize: '14px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
  };

  const buttonStyle = {  
    padding: '12px 24px',
    fontSize: '16px',
    backgroundColor: '#FFC74F',
    color: '#3d3d3d',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    try {
      const res = await axios.post("http://localhost:3000/api/contacts", formData);
      console.log('API response:', res.data);
      alert('Thank you! Your message has been received.');
      navigate('/');
    } catch (err) {
      console.error('API error:', err);
      alert('Sorry, something went wrong.');
    }
  };

  return (
    <div style={{ minHeight: '100vh', padding: '40px' }}>
      <div style={{ maxWidth: '400px', margin: '0 auto', color: '#3d3d3d' }}>
        <h1>Contact Me</h1>
        <div style={{ marginBottom: '30px' }}>
          <p><strong>Email:</strong> hyojin@Kimail.com</p>
          <p><strong>Phone:</strong> +1 (437) 456-7890</p>
        </div>

        <form onSubmit={handleSubmit}>
          <input name="firstName" type="text" placeholder="First Name"
            onChange={handleChange} required style={inputStyle} />
          <input name="lastName"  type="text" placeholder="Last Name"
            onChange={handleChange} required style={inputStyle} />
          <input name="phone"     type="tel" placeholder="Contact Number"
            onChange={handleChange} required style={inputStyle} />
          <input name="email"     type="email" placeholder="Email Address"
            onChange={handleChange} required style={inputStyle} />
          <textarea name="message" placeholder="Your Message" rows="4"
            onChange={handleChange} required style={{ ...inputStyle, resize: 'vertical' }} />
          {/* buttonStyle */}
          <button type="submit" style={buttonStyle}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
