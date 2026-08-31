import React, { useEffect } from 'react'
import axios from "axios";
import { useState } from 'react';
import "./styles/Students.css"
import { useNavigate } from 'react-router-dom';

const Students = () => {
  const [students, setStudents] = useState();
  const [CsStudents, setCsStudents] = useState(false)
  const [mechStudents, setMechStudents] = useState(false)

  const navigate = useNavigate()

  const setMechTrue = ()=>{

    if(mechStudents == true){
      setMechStudents(false)
    }else{
      setMechStudents(true)
    }
    
    
  }

  const setCsTrue = ()=>{

    if(CsStudents == true){
      setCsStudents(false)
    }else{
      setCsStudents(true)
    }
    
  }

  useEffect(() => {

    

    const getStudents = async () => {
      if((CsStudents == false && mechStudents == false)){

        const response = axios.get("http://localhost:3000/students")
        setStudents((await response).data)

      }

      else if(CsStudents == true){

        const response = await axios.get("http://localhost:3000/get-cs")
        setStudents(response.data)
      }

      else if(mechStudents == true){
        const response = await axios.get("http://localhost:3000/get-mech")
        setStudents(response.data)
      }

    }
    getStudents()
    console.log("mech", mechStudents)
    console.log("cs", CsStudents)

  }, [mechStudents, CsStudents])

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
      <button onClick={()=>setMechTrue()}>Mechanical</button>
      <button onClick={()=>setCsTrue()}>CSE</button>

      <p>This is Students Page</p>
      {students.map(student => (
        <h1 key={student.id} onClick={()=>Navigate(student.id)}>{student.name}</h1>
      
      ))}
      </div>
    </>
  )
}

export default Students