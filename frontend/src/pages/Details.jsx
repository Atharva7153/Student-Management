import React from 'react'
import "./styles/Students.css"
import { useParams } from 'react-router-dom'

const Details = () => {
  const {id} = useParams()
  return (
    
    <>
    <div className="main">
      <h1>Name : Atharva</h1>
      <h1>Age : 18</h1>
      <h1>Branch : CSE</h1>
      <h1>{id}</h1>
    </div>
    </>
  )
}

export default Details