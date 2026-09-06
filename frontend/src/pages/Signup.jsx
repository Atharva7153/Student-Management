import React from 'react'
import { useState } from 'react'
import api from "../../api/axios"
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await api.post(
                "/register",
                formData
            )
            console.log(response.data)
            navigate("/login")

        } catch (error) {

            console.log(error.response?.data)
        }

    }

    return (
        <>
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name='name'
                    placeholder='Name'
                    value={formData.name}
                    onChange={handleChange}
                />

                <br />

                <input type="email"
                    name='email'
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleChange}
                />
                <br />

                <input type="password"
                    name='password'
                    placeholder='Enter your password'
                    value={formData.password}
                    onChange={handleChange}
                />

                <br />

                <button type='submit'>SignUp</button>
            </form>
        </>
    )
}

export default Signup