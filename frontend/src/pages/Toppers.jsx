import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./styles/Toppers.css"

const Toppers = () => {
  const [toppers, setToppers] = useState([])
  const [message, setMessage] = useState("")
  const backend_uri = import.meta.env.VITE_BACKEND_URI
  const navigate = useNavigate()

  useEffect(() => {
    const getToppers = async () => {
      try {
        const response = await axios.get(`${backend_uri}/toppers`)
        setToppers(response.data)
      } catch (e) {
        console.error(e)
      }
    }
    getToppers()
  }, [message])

  const handleDelete = async (id) => {
    const confirm = window.confirm("Remove this student from toppers?")
    if (!confirm) return
    const response = await axios.delete(`${backend_uri}/delete-topper/${id}`)
    setMessage(response.data.message)
  }

  return (
    <div className="page-container">
      <div className="toppers-header">
        <div>
          <h2>🏆 Toppers</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '4px' }}>
            {toppers.length} topper{toppers.length !== 1 ? 's' : ''} recognized
          </p>
        </div>
        <span className="badge">{toppers.length} Total</span>
      </div>

      {message && <div className="status-msg" style={{ marginBottom: '20px' }}>{message}</div>}

      {toppers.length === 0 ? (
        <div className="toppers-empty">
          <span style={{ fontSize: '3rem' }}>🏆</span>
          <p>No toppers added yet.</p>
          <p style={{ fontSize: '0.85rem' }}>Go to a student's details page and add them as a topper.</p>
        </div>
      ) : (
        <div className="toppers-grid">
          {toppers.map((topper, index) => (
            <div key={topper._id} className="topper-card">
              <div className="topper-rank">#{index + 1}</div>
              <div className="topper-avatar" onClick={() => navigate(`/student/id/${topper.student._id}`)}>
                {topper.student?.name ? topper.student.name.charAt(0).toUpperCase() : '?'}
              </div>
              <div className="topper-info">
                <h3
                  className="topper-name"
                  onClick={() => navigate(`/student/id/${topper.student._id}`)}
                >
                  {topper.student?.name}
                </h3>
                {topper.student?.course && (
                  <span className="badge">{topper.student.course}</span>
                )}
              </div>
              <button
                className="btn-danger topper-delete"
                onClick={() => handleDelete(topper._id)}
                title="Remove from toppers"
              >
                ✕ Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Toppers