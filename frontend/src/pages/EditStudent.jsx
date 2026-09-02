import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const EditStudent = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const [student, setStudent] = useState(null)
    const [loading, setLoading] = useState(true)

    const backend_uri = import.meta.env.VITE_BACKEND_URI
    console.log(backend_uri)

    useEffect(() => {
        const getStudent = async () => {
            try {
                const response = await axios.get(
                    `${backend_uri}/student/id/${id}`
                )

                console.log("Student:", response.data)

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
        setStudent({
            ...student,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await axios.put(
                `${backend_uri}/student/${id}`,
                student
            )

            alert("Student updated successfully!")

            navigate('/students')
        } catch (error) {
            console.error("Error updating student:", error)
        }
    }

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (!student) {
        return <h1>Student not found</h1>
    }

    return (
        <div className="main">
            <h1>Edit Student Details</h1>

            <form onSubmit={handleSubmit}>

                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={student.name || ''}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Age</label>
                    <input
                        type="number"
                        name="age"
                        value={student.age || ''}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Course</label>
                    <input
                        
                        name="course"
                        value={student.course|| ''}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit">
                    Update Student
                </button>

                <button
                    type="button"
                    onClick={() => navigate('/students')}
                >
                    Cancel
                </button>

            </form>
        </div>
    )
}

export default EditStudent
