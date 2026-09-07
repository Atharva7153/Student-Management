import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./styles/Students.css"
import { useNavigate } from 'react-router-dom'

const Students = () => {
  const [students, setStudents] = useState(null)
  const [course, setCourse] = useState("all")
  const backend_uri = import.meta.env.VITE_BACKEND_URI
  const navigate = useNavigate()

  useEffect(() => {
    const getStudents = async () => {
      try {
        if (course === "all") {
          const response = await axios.get(`${backend_uri}/students`)
          setStudents(response.data)
        } else {
          const response = await axios.get(`${backend_uri}/get-${course}`)
          setStudents(response.data)
        }
      } catch (e) {
        setStudents([])
      }
    }
    getStudents()
  }, [course])

  if (!students) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <span>Loading students...</span>
      </div>
    )
  }

  return (
    <div className="page-container">
      <div className="students-header">
        <div>
          <h2>Students</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '4px' }}>
            {students.length} student{students.length !== 1 ? 's' : ''} found
          </p>
        </div>
        <div className="filter-bar">
          <label className="filter-label">Filter by Course</label>
          <select
            className="filter-select"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          >
            <option value="all">All Courses</option>
            <option value="CSE">CSE</option>
            <option value="Mechanical">Mechanical</option>
          </select>
        </div>
      </div>

      {students.length === 0 ? (
        <div className="students-empty">
          <span style={{ fontSize: '3rem' }}>🎓</span>
          <p>No students found for this course.</p>
        </div>
      ) : (
        <div className="students-grid">
          {students.map(student => (
            <div
              key={student._id}
              className="student-card"
              onClick={() => navigate(`/student/id/${student._id}`)}
            >
              <div className="student-avatar">
                {student.name ? student.name.charAt(0).toUpperCase() : '?'}
              </div>
              <div className="student-info">
                <h3 className="student-name">{student.name}</h3>
                <p className="student-age">Age: {student.age}</p>
              </div>
              {student.course && (
                <span className="badge">{student.course}</span>
              )}
              <span className="student-arrow">→</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Students