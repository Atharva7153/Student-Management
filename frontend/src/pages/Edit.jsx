import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const Edit = () => {
  const [name, setName] = useState()
  const [age, setAge] = useState()
  const [branch, setBranch] = useState()

  const handleSubmit = async(e)=>{

    e.preventDefault()
    try{
      if(name === null || age == null || branch == null ){
        alert("One of the Field is Empty")
      }
      await axios.post("http://localhost:3000/add",{
        name,
        age,
        branch
      })
      console.log("New Student Added")

    }catch(error){
      console.log(error)
    }
  }
  return (

    <>
    <p>This is Edit Student Page</p>
    <h4>Add Student :-</h4>
    <form onSubmit={handleSubmit}>
      <input value={name}
             onChange={(e)=>setName(e.target.value)}
             placeholder='Name'
      />
      <br />
      <input value={age}
             onChange={(e)=>setAge(e.target.value)}
             placeholder='Age'
      />
      <br />
      <input value={branch}
             onChange={(e)=>setBranch(e.target.value)}
             placeholder='Branch'
      />
      <br />
      <input type="submit" />
    </form>
    </>

  )
}

export default Edit