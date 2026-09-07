import React from 'react'

const About = () => {
  return (
    <div className="page-container">
      <div className="card" style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'left' }}>
        <div style={{ marginBottom: '24px' }}>
          <span className="badge" style={{ marginBottom: '16px', display: 'inline-block' }}>MERN Stack</span>
          <h2 style={{ marginBottom: '8px' }}>About This Project</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            The Student Management System is a full-stack MERN application built from scratch.
          </p>
        </div>

        <hr className="divider" />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '4px' }}>
          <div>
            <h3 style={{ marginBottom: '6px', fontSize: '1rem' }}>🎯 Purpose</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              This is the 3rd rebuild of this project — a MERN stack comeback project built entirely by hand, not using AI for the code.
            </p>
          </div>
          <div>
            <h3 style={{ marginBottom: '6px', fontSize: '1rem' }}>🛠️ Tech Stack</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              MongoDB · Express.js · React · Node.js · JWT Auth · Chart.js · Pure CSS
            </p>
          </div>
          <div>
            <h3 style={{ marginBottom: '6px', fontSize: '1rem' }}>👤 Developer</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Built by <strong style={{ color: 'var(--primary)' }}>Atharva Sharma</strong> — planning his comeback to full-stack development.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About