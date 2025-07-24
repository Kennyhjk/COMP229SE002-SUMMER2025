import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useAuth } from '../context/AuthContext'

const EducationForm = () => {
  const { user } = useAuth()

  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    field: '',
    startYear: '',
    endYear: ''
  })

  const [educationList, setEducationList] = useState([])

  const fetchEducation = async () => {
    try {
      const res = await axios.get('/api/qualification')
      setEducationList(res.data)
    } catch (err) {
      console.error('Fetch error:', err)
    }
  }

  useEffect(() => {
    fetchEducation()
  }, [])

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await axios.post('/api/qualification', formData)
      setFormData({
        school: '',
        degree: '',
        field: '',
        startYear: '',
        endYear: ''
      })
      fetchEducation()
    } catch (err) {
      console.error('Submit error:', err)
    }
  }

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('jwt')
      await axios.delete(`/api/qualification/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      fetchEducation()
    } catch (err) {
      console.error('Delete failed:', err)
    }
  }

  return (
    <div>
      <h2>Add Education</h2>
      {}
      {user?.role === 'admin' ? (
        <form onSubmit={handleSubmit}>
          <input name="school" placeholder="School" onChange={handleChange} value={formData.school} required />
          <input name="degree" placeholder="Degree" onChange={handleChange} value={formData.degree} required />
          <input name="field" placeholder="Field of Study" onChange={handleChange} value={formData.field} required />
          <input name="startYear" placeholder="Start Year" onChange={handleChange} value={formData.startYear} required />
          <input name="endYear" placeholder="End Year" onChange={handleChange} value={formData.endYear} required />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <p><i>You do not have permission to add education.</i></p>
      )}

      <h3>Education List</h3>
      <ul>
        {educationList.map((item) => (
          <li key={item._id}>
            {item.school} | {item.degree} in {item.field} ({item.startYear}–{item.endYear})
            {}
            {user?.role === 'admin' && (
              <button onClick={() => handleDelete(item._id)} style={{ marginLeft: '10px' }}>Delete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default EducationForm
