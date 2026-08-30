import React, { useEffect, useState } from 'react'
import "./styles/Students.css"
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

const Details = () => {
  const { id } = useParams()
  const [student, setStudent] = useState()
  useEffect(() => {


    const getStudent = async () => {

      const response = await axios.get(`http://localhost:3000/student/id/${id}`)
      setStudent(response.data)
    }


    getStudent()

  }, [id])


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
      </div>
    </>
  )
}

export default Details