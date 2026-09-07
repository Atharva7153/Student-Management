import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import "./styles/Edit.css"

const EditStudent = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [student, setStudent] = useState(null)
    const [loading, setLoading] = useState(true)
    const [message, setMessage] = useState("")
    const backend_uri = import.meta.env.VITE_BACKEND_URI

    useEffect(() => {
        const getStudent = async () => {
            try {
                const response = await axios.get(`${backend_uri}/student/id/${id}`)
                setStudent(response.data)
            } catch (error) {
                console.error("Error fetching student:", error)
            } finally {
                setLoading(false)
            }
        }
        getStudent()
    }, [id])

    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setMessage("")
        try {
            await axios.put(`${backend_uri}/student/${id}`, student)
            navigate('/students')
        } catch (error) {
            setMessage("Failed to update student. Please try again.")
        }
    }

    if (loading) {
        return (
            <div className="loading-screen">
                <div className="spinner"></div>
                <span>Loading student...</span>
            </div>
        )
    }

    if (!student) {
        return (
            <div className="page-container">
                <div className="students-empty">
                    <span style={{ fontSize: '3rem' }}>⚠️</span>
                    <p>Student not found.</p>
                    <button className="btn-primary" onClick={() => navigate('/students')}>
                        Back to Students
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="edit-page">
            <div className="edit-card">
                <div className="edit-card-header">
                    <h2>Edit Student</h2>
                    <p>Update the student's information below</p>
                </div>

                <form className="edit-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={student.name || ''}
                            onChange={handleChange}
                            placeholder="Student's full name"
                        />
                    </div>
                    <div className="form-group">
                        <label>Age</label>
                        <input
                            type="number"
                            name="age"
                            value={student.age || ''}
                            onChange={handleChange}
                            placeholder="Age"
                        />
                    </div>
                    <div className="form-group">
                        <label>Course / Branch</label>
                        <input
                            type="text"
                            name="course"
                            value={student.course || ''}
                            onChange={handleChange}
                            placeholder="e.g. CSE, Mechanical"
                        />
                    </div>

                    {message && <div className="status-msg">{message}</div>}

                    <div className="edit-actions">
                        <button type="submit" className="btn-primary">
                            Save Changes
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

export default EditStudent
