import React, { useState } from 'react'
import axios from 'axios'
import { useAuth } from '../context/AuthContext' 

const SignInForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [message, setMessage] = useState('')
  const { login } = useAuth()  

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await axios.post('/api/auth/signin', formData)
      login(res.data.token) 
      setMessage('Login successful!')
    } catch (err) {
      setMessage(err.response?.data?.error || 'Login failed')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign In</h2>
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Sign In</button>
      <p>{message}</p>
    </form>
  )
}

export default SignInForm
