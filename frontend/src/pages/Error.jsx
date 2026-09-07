import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
  const navigate = useNavigate()
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '70vh',
      textAlign: 'center',
      padding: '40px 16px'
    }}>
      <div style={{
        fontSize: '7rem',
        fontWeight: '900',
        color: 'var(--primary)',
        lineHeight: '1',
        marginBottom: '8px',
        letterSpacing: '-4px'
      }}>
        404
      </div>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '12px', color: 'var(--text)' }}>
        Page Not Found
      </h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '32px', maxWidth: '340px', fontSize: '0.95rem' }}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <button
        className="btn-primary"
        style={{ padding: '12px 32px', fontSize: '0.95rem' }}
        onClick={() => navigate('/')}
      >
        Go Home
      </button>
    </div>
  )
}

export default Error