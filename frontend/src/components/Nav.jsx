import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import "./Navbar.css"
import { useAuth } from "../../context/AuthContext1"

const Nav = () => {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="navbar">
        <span className="navbar-logo">SMS</span>
      </div>
    )
  }

  const initials = user?.name
    ? user.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
    : 'G'

  return (
    <nav className="navbar">
      <Link className="navbar-logo" to="/">
        S<span>MS</span>
      </Link>

      <div className="nav-links">
        <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/">Home</NavLink>
        <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/students">Students</NavLink>
        {user && (
          <>
            <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/toppers">Toppers</NavLink>
            <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/about">About</NavLink>
            {user.role === "admin" && (
              <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/edit">Add Student</NavLink>
            )}
          </>
        )}
      </div>

      <div className="navbar-right">
        {user ? (
          <>
            <div className="user-pill">
              <div className="user-avatar">{initials}</div>
              <span>{user.name || 'User'}</span>
              {user.role && <span className="role-badge">{user.role}</span>}
            </div>
            <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/profile">Profile</NavLink>
          </>
        ) : (
          <>
            <Link className="nav-auth-btn outline" to="/login">Login</Link>
            <Link className="nav-auth-btn filled" to="/signup">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default Nav