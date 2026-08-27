import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Nav = () => {
  return (
    <div className="navbar">
        <Link className='None' to={"/"}>Home</Link>
        <Link className='None' to={"/students"}>Students</Link>
        <Link className='None' to={"/about"}>About Me</Link>
        <Link className='None' to={"/toppers"}>Toppers</Link>
        <Link className='None' to={"/edit"}>Edit</Link>
    </div>
  )
}

export default Nav