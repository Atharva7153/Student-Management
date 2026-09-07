import React from 'react'
import { useAuth } from '../../context/AuthContext1'
import { Navigate } from 'react-router-dom'

const AdminRoute = () => {

    const {user, loading} = useAuth()

    if(loading){
        return <h2>Loading..</h2>

    }

    if(!user){
        return <Navigate to="/login" replace />
    }
    
    if(user.role !== "admin"){
        return <Navigate to="/" replace />
    }
  
}

export default AdminRoute