import React, { useState } from 'react'
import api from "../../api/axios"
import { useNavigate, Link } from 'react-router-dom'
import "./styles/Auth.css"

const Signup = () => {
    const [formData, setFormData] = useState({ name: "", email: "", password: "" })
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        try {
            await api.post("/register", formData)
            navigate("/login")
        } catch (err) {
            setError(err.response?.data?.message || "Registration failed. Please try again.")
        }
    }

    return (
        <div className="auth-page">
            <div className="auth-card">
                <div className="auth-header">
                    <div className="auth-logo-mark">S</div>
                    <h2>Create an account</h2>
                    <p>Join the Student Management System</p>
                </div>

                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your full name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Email address</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Create a password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {error && <div className="auth-error">{error}</div>}

                    <button type="submit" className="btn-primary auth-submit-btn">
                        Create Account
                    </button>
                </form>

                <div className="auth-footer-link">
                    Already have an account? <Link to="/login">Sign In</Link>
                </div>
            </div>
        </div>
    )
}

export default Signup