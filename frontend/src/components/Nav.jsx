import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import { useAuth } from "../../context/AuthContext1"

const Nav = () => {
  const { user, loading } = useAuth()
  if(loading){
    return
  }
  return (
    <div className="navbar">
      <p>Hello {user?.name || "Guest"}</p>

      <Link className='None' to={"/"}>Home</Link>
      <Link className='None' to={"/students"}>Students</Link>

      {user && (
        <>
          <Link className='None' to={"/about"}>About Me</Link>
          <Link className='None' to={"/toppers"}>Toppers</Link>
          <Link className='None' to={"/edit"}>Edit</Link>
          <Link className='None' to={"/profile"}>Profile</Link>
        </>
      )}

      {!user && (
        <>
          <Link className='None' to={"/login"}>Login</Link>
          <Link className='None' to={"/signup"}>Sign Up</Link>
        </>
      )}
      


    </div>
  )
}

export default Nav