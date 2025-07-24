import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useAuth } from '../context/AuthContext'

const ProjectForm = () => {
  const { user } = useAuth()
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    duration: ''
  })

  const [projectList, setProjectList] = useState([])

  const fetchProjects = async () => {
    try {
      const res = await axios.get('/api/project')
      setProjectList(res.data)
    } catch (err) {
      console.error('Fetch error:', err)
    }
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const token = localStorage.getItem('jwt')
      await axios.post('/api/project', formData, {
        headers: { Authorization: `Bearer ${token}` }
      })
      setFormData({ title: '', description: '', duration: '' })
      fetchProjects()
    } catch (err) {
      console.error('Submit error:', err)
    }
  }

  const handleDelete = async id => {
    try {
      const token = localStorage.getItem('jwt')
      await axios.delete(`/api/project/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      fetchProjects()
    } catch (err) {
      console.error('Delete failed:', err)
    }
  }

  return (
    <div>
      <h2>Project Management</h2>

      {user?.role === 'admin' ? (
        <form onSubmit={handleSubmit}>
          <input name="title" placeholder="Project Title" onChange={handleChange} value={formData.title} required />
          <input name="duration" placeholder="Duration" onChange={handleChange} value={formData.duration} required />
          <textarea name="description" placeholder="Description" onChange={handleChange} value={formData.description} required />
          <button type="submit">Add Project</button>
        </form>
      ) : (
        <p><i>You do not have permission to add projects.</i></p>
      )}

      <h3>Project List</h3>
      <ul>
        {projectList.map((project) => (
          <li key={project._id}>
            <strong>{project.title}</strong> ({project.duration})<br />
            {project.description}
            {user?.role === 'admin' && (
              <button onClick={() => handleDelete(project._id)} style={{ marginLeft: '10px' }}>
                Delete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProjectForm
