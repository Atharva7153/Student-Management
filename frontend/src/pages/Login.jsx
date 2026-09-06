import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../api/axios'

const Login = () => {
    const [message, setMessage] = useState()
    const [formData, setFormData] = useState({
        email : "",
        password : ""
    })

    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async (e)=>{

        e.preventDefault()

        try{
            const response = await api.post(
                "/login",
                formData
            )
            console.log(response.data)
            setMessage(response.data.message)
            navigate("/profile")

        }catch(error){

            console.log(error.response?.data)
        }

    }

    const navigate = useNavigate()
  return (
    <>
    <h1>Login</h1>
    <form onSubmit={handleSubmit}>
        <input 
            type="email" 
            name='email'
            placeholder='Enter Email'
            value={formData.email}
            onChange={handleChange}
        />
        <br />
        <input 
            type="password"
            name='password'
            placeholder='Password'
            value={formData.password}
            onChange={handleChange} 
        />

        <button type='submit'>Login</button>
    </form>

    <p>{message}</p>
    </>
  )
}

export default Login