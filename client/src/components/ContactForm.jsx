import React, { useState } from 'react'
import axios from 'axios'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  })
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('/api/contact', formData)
      setSuccess('Message sent successfully!')
      setError('')
      setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' })
    } catch (err) {
      setSuccess('')
      setError(err.response?.data?.error || 'Failed to send message')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Contact Us</h2>
      <input name="firstName" placeholder="First Name" onChange={handleChange} value={formData.firstName} required />
      <input name="lastName" placeholder="Last Name" onChange={handleChange} value={formData.lastName} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} value={formData.email} required />
      <input name="phone" placeholder="Phone" onChange={handleChange} value={formData.phone} required />
      <textarea name="message" placeholder="Message" onChange={handleChange} value={formData.message} required />
      <button type="submit">Send</button>
      {success && <p style={{ color: 'green' }}>{success}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  )
}

export default ContactForm
