import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext1'

const ProtectedRoute = () => {
  const {user, loading} = useAuth()

  if(loading){
    return <h2>Loading...</h2>
  }
  if(!user){
    return <Navigate to="login" replace />
  }

  return <Outlet/>
}


export default ProtectedRoute