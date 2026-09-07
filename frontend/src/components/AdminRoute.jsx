import React from 'react'
import { useAuth } from '../../context/AuthContext1'
import { Navigate, Outlet } from 'react-router-dom'

const AdminRoute = () => {
    const { user, loading } = useAuth()

    if (loading) {
        return (
            <div className="loading-screen">
                <div className="spinner"></div>
                <span>Loading...</span>
            </div>
        )
    }

    if (!user) {
        return <Navigate to="/login" replace />
    }

    if (user.role !== "admin") {
        return <Navigate to="/" replace />
    }

    return <Outlet />
}

export default AdminRoute