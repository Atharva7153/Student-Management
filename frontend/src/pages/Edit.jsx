import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./styles/Edit.css"

const Edit = () => {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [branch, setBranch] = useState("")
  const [message, setMessage] = useState("")
  const backend_uri = import.meta.env.VITE_BACKEND_URI
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage("")
    try {
      await axios.post(`${backend_uri}/add`, { name, age, branch })
      navigate("/students")
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong")
    }
  }

  return (
    <div className="edit-page">
      <div className="edit-card">
        <div className="edit-card-header">
          <h2>Add New Student</h2>
          <p>Fill in the details to register a new student</p>
        </div>

        <form className="edit-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Student's full name"
              required
            />
          </div>
          <div className="form-group">
            <label>Age</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Age"
              min="1"
              max="100"
              required
            />
          </div>
          <div className="form-group">
            <label>Branch / Course</label>
            <input
              type="text"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              placeholder="e.g. CSE, Mechanical"
              required
            />
          </div>

          {message && <div className="status-msg">{message}</div>}

          <div className="edit-actions">
            <button type="submit" className="btn-primary">
              Add Student
            </button>
            <button type="button" className="btn-ghost" onClick={() => navigate('/students')}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Edit