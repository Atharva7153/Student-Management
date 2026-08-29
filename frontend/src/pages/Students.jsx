import React, { useEffect } from 'react'
import axios from "axios";
import { useState } from 'react';
import "./styles/Students.css"
import { useNavigate } from 'react-router-dom';

const Students = () => {
  const [students, setStudents] = useState();
  const navigate = useNavigate()

  useEffect(() => {

    const getStudents = async () => {
      const response = axios.get("http://localhost:3000/students")
      setStudents((await response).data)
    }
    getStudents()

  }, [])

  const Navigate = (id)=>{

    navigate(`/student/id/${id}`)
  }
  

  if(!students){
    return(
      <div className="main">
      <p>There are No Students, or Either Backend is Turned OFF</p>
      </div>
    )
  }
  const Click = (name)=>{
    alert("You Clicked " + name)
  }
  return (
    <>
    <div className="main">
      <p>This is Students Page</p>
      {students.map(student => (
        <h1 onClick={()=>Navigate(student.id)}>{student.name}</h1>
      
      ))}
      </div>
    </>
  )
}

export default Students