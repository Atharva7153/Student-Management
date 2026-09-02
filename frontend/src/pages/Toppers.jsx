import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./styles/Students.css"

const Toppers = () => {
  const [toppers, setToppers] = useState([])
  const [message, setMessage] = useState()

  const backend_uri = import.meta.env.VITE_BACKEND_URI
  console.log(backend_uri)

  const navigate = useNavigate()

  const Navigate = (id)=>{
    navigate(`/student/id/${id}`)
  }

  useEffect(()=>{
    const getToppers = async ()=>{

      const response = await axios.get(`${backend_uri}/toppers`)
      setToppers(response.data)
    }
    getToppers()
    
  }, [message])

  const handleDelete = async (id)=>{
    const response = await axios.delete(`${backend_uri}/delete-topper/${id}`)
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