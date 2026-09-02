import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./styles/Students.css"

const Toppers = () => {
  const [students, setStudent] = useState([])
  const [message, setMessage] = useState()

  const navigate = useNavigate()

  const Navigate = (id)=>{
    navigate(`/student/id/${id}`)
  }

  useEffect(()=>{
    const getToppers = async ()=>{

      const response = await axios.get("http://localhost:3000/toppers")
      setStudent(response.data)
    }
    getToppers()
    
  }, [message])

  const handleDelete = async (id)=>{
    const response = await axios.delete(`http://localhost:3000/delete-topper/${id}`)
    setMessage(response.data.message)
  }
  return (
    
    <>
    <div className="main">
      <h1>Toppers :-</h1>
      {students.map((student) => (
        <div key={student.id}>
          <h3 onClick={()=>{Navigate(student.id)}}>{student.name}</h3>
          
          <button onClick={()=>handleDelete(student.id)}>Delete From Toppers</button>
        </div>
      ))}

    </div>
    <p>{message}</p>
    </>
  )
}

export default Toppers