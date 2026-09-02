import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./styles/Students.css"

const Toppers = () => {
  const [toppers, setToppers] = useState([])
  const [message, setMessage] = useState()

  const navigate = useNavigate()

  const Navigate = (id)=>{
    navigate(`/student/id/${id}`)
  }

  useEffect(()=>{
    const getToppers = async ()=>{

      const response = await axios.get("http://localhost:3000/toppers")
      setToppers(response.data)
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
      {toppers.map((topper) => (
        <div key={topper.student.id}>
          <h3 onClick={()=>{Navigate(topper.student._id)}}>{topper.student.name}</h3>
          
          <button onClick={()=>handleDelete(topper._id)}>Delete From Toppers</button>
        </div>
      ))}

    </div>
    <p>{message}</p>
    </>
  )
}

export default Toppers