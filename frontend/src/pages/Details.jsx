import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../../context/AuthContext1'
import "./styles/Details.css"

const Details = () => {
  const { id } = useParams()
  const [student, setStudent] = useState(null)
  const [message, setMessage] = useState("")
  const navigate = useNavigate()
  const { user, loading } = useAuth()
  const backend_uri = import.meta.env.VITE_BACKEND_URI

  useEffect(() => {
    const getStudent = async () => {
      try {
        const response = await axios.get(`${backend_uri}/student/id/${id}`)
        setStudent(response.data)
      } catch (e) {
        console.error(e)
      }
    }
    getStudent()
  }, [id])

  const addToTopper = async (id) => {
    const response = await axios.post(`${backend_uri}/add-topper`, { _id: id })
    setMessage(response.data.message)
  }

  const deleteStudent = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this student?")
    if (!confirmDelete) return
    const response = await axios.delete(`${backend_uri}/student/${id}`)
    setMessage(response.data.message)
    alert(response.data.message)
    navigate("/students")
  }

  if (!student) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <span>Loading student...</span>
      </div>
    )
  }

  return (
    <div className="page-container">
      <button className="btn-ghost back-btn" onClick={() => navigate('/students')}>
        ← Back to Students
      </button>

      <div className="detail-card">
        <div className="detail-avatar">
          {student.name ? student.name.charAt(0).toUpperCase() : '?'}
        </div>

        <div className="detail-name-row">
          <h2>{student.name}</h2>
          {student.course && <span className="badge">{student.course}</span>}
        </div>

        <div className="detail-rows">
          <div className="detail-row">
            <span className="detail-row-label">Full Name</span>
            <span className="detail-row-value">{student.name}</span>
          </div>
          <div className="detail-row">
            <span className="detail-row-label">Age</span>
            <span className="detail-row-value">{student.age}</span>
          </div>
          <div className="detail-row">
            <span className="detail-row-label">Course</span>
            <span className="detail-row-value">{student.course || 'N/A'}</span>
          </div>
          <div className="detail-row">
            <span className="detail-row-label">Student ID</span>
            <span className="detail-row-value detail-id">{id}</span>
          </div>
        </div>

        {user && user.role === "admin" && (
          <div className="detail-actions">
            <button className="btn-primary" onClick={() => addToTopper(student._id)}>
              🏆 Add to Toppers
            </button>
            <Link className="btn-secondary detail-action-link" to={`/edit/id/${id}`}>
              ✏️ Edit Student
            </Link>
            <button className="btn-danger" onClick={() => deleteStudent(student._id)}>
              🗑️ Delete
            </button>
          </div>
        )}

        {message && <div className="status-msg">{message}</div>}
      </div>
    </div>
  )
}

export default Details