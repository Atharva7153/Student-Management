import React, { useEffect, useState } from 'react'
import "./styles/Students.css"
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Details = () => {
  const { id } = useParams()
  const [student, setStudent] = useState()
  const [message, setMessage] = useState("")
  const navigate = useNavigate()

  const backend_uri = import.meta.env.VITE_BACKEND_URI
  console.log(backend_uri)


  useEffect(() => {


    const getStudent = async () => {

      const response = await axios.get(`${backend_uri}/student/id/${id}`)
      setStudent(response.data)
    }


    getStudent()

  }, [id])

  const addToTopper = async (id)=>{
    const response = await axios.post(`${backend_uri}/add-topper`, {
      _id : id
    })
    setMessage(response.data.message)

  }

  const deleteStudent = async (id)=>{

    const confirmDelete = window.confirm(
        "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) {
        return;
    }

    const response = await axios.delete(`${backend_uri}/student/${id}`)
    setMessage(response.data.message)
    alert(response.data.message)
    navigate("/students")

  }


  if (!student) {
    return (<h1>Loading</h1>)
  }
  return (

    <>
      <div className="main">
        <h1>Name : {student.name}</h1>
        <h1>Age : {student.age}</h1>

        {!student.course ? (
          <h1>No Course Found</h1>
        ) : (
          <h1>Course : {student.course}</h1>
        )}
        <h1>ID : {id}</h1>
        <br />
        <br />
        <h4>Edit Student :-</h4>
        <Link className='None' to={`/edit/id/${id}`}>Edit</Link>
        <br />
        <button onClick={()=>{addToTopper(student._id)}}>Add to Toppers</button>
        <br />
        <button onClick={()=>{deleteStudent(student._id)}}>Delete Student</button>
        <h4>{message}</h4>
      </div>
    </>
  )
}

export default Details