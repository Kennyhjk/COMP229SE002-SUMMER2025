import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

export default function ProjectForm() {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    title: '',
    firstname: '',
    lastname: '',
    email: '',
    completion: '',
    description: ''
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
    borderRadius: '6px',
    cursor: 'pointer'
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('/api/projects', formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      alert('Project added successfully!');
      setFormData({
        title: '',
        firstname: '',
        lastname: '',
        email: '',
        completion: '',
        description: ''
      });
    } catch (err) {
      alert('Error adding project');
      console.error(err);
    }
  };

  return (
    <div style={{
      backgroundColor: '#fdfdfd',
      padding: '30px',
      borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      marginTop: '30px'
    }}>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          placeholder="Project Title"
          value={formData.title}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          name="firstname"
          type="text"
          placeholder="First Name"
          value={formData.firstname}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          name="lastname"
          type="text"
          placeholder="Last Name"
          value={formData.lastname}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={inputStyle}
        />
       <input
          name="completion"
          type="text"
          placeholder="YYYY-MM-DD"
          pattern="\d{4}-\d{2}-\d{2}"
          value={formData.completion}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <textarea
          name="description"
          placeholder="Project Description"
          value={formData.description}
          onChange={handleChange}
          rows="4"
          required
          style={{ ...inputStyle, resize: 'vertical' }}
        />
        <button type="submit" style={buttonStyle}>Add Project</button>
      </form>
    </div>
  );
}
