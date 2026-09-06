import React from 'react'
import { useNavigate } from 'react-router-dom';
import api from '../../api/axios';
import { useAuth } from '../../context/AuthContext1';

const Profile = () => {
  const {logout} = useAuth()
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      
      await logout()

      navigate("/login");

    } catch (error) {
      console.log(error.response?.data);
    }
  };

  return (
    <>
      <h1>Profile Page</h1>
      <button onClick={handleLogout}>LogOut</button>
    </>
  )
}

export default Profile