import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext1'
import "./styles/Profile.css"

const Profile = () => {
  const { logout, user } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logout()
      navigate("/login")
    } catch (error) {
      console.log(error.response?.data)
    }
  }

  const initials = user?.name
    ? user.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
    : 'U'

  return (
    <div className="page-container">
      <div className="profile-card">
        <div className="profile-avatar">{initials}</div>
        <h2 className="profile-name">{user?.name || 'User'}</h2>
        <p className="profile-email">{user?.email || ''}</p>
        {user?.role && (
          <span className={`badge ${user.role === 'admin' ? 'badge-admin' : ''}`}>
            {user.role}
          </span>
        )}

        <hr className="divider" />

        <div className="profile-info-rows">
          <div className="profile-info-row">
            <span className="profile-info-label">Name</span>
            <span className="profile-info-value">{user?.name}</span>
          </div>
          <div className="profile-info-row">
            <span className="profile-info-label">Email</span>
            <span className="profile-info-value">{user?.email}</span>
          </div>
          <div className="profile-info-row">
            <span className="profile-info-label">Role</span>
            <span className="profile-info-value">{user?.role || 'user'}</span>
          </div>
        </div>

        <button className="btn-danger profile-logout" onClick={handleLogout}>
          Sign Out
        </button>
      </div>
    </div>
  )
}

export default Profile