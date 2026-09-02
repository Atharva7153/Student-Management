import React, { useEffect } from 'react'
import axios from "axios";
import { useState } from 'react';
import "./styles/Students.css"
import { useNavigate } from 'react-router-dom';

const Students = () => {
  const [students, setStudents] = useState();
  const [course, setCourse] = useState("all")

  const backend_uri = import.meta.env.VITE_BACKEND_URI
  console.log(backend_uri)

  const navigate = useNavigate()

  useEffect(() => {



    const getStudents = async () => {
      if (course == "all") {

        const response = axios.get(`${backend_uri}/students`)
        setStudents((await response).data)

      }
      else{

        const response = axios.get(`${backend_uri}/get-${course}`)
        setStudents((await response).data)

      }

    }
    getStudents()

  }, [course])

  const Navigate = (id) => {

    navigate(`/student/id/${id}`)
  }


  if (!students) {
    return (
      <div className="main">
        <p>There are No Students, or Either Backend is Turned OFF</p>
      </div>
    )
  }
  const Click = (name) => {
    alert("You Clicked " + name)
  }
  return (
    <>
      <div className="main">

        <label>Course : </label>
        <select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        >
          <option value="all">All</option>
          <option value="CSE">CSE</option>
          <option value="Mechanical">Mechanical</option>
        </select>

        <p>This is Students Page</p>
        {students.map(student => (
          <h1 key={student._id} onClick={() => Navigate(student._id)}>{student.name}</h1>

        ))}
      </div>
    </>
  )
}

export default Students