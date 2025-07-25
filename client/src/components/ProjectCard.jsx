import React from 'react'

export default function ProjectCard({ project, onDelete, isAdmin }) {
  return (
    <div style={styles.card}>
      <h3 style={styles.title}>{project.title}</h3>
      <p><strong>Completion:</strong> {project.completion}</p>
      <p>{project.description}</p>
      {isAdmin && (
        <button style={styles.deleteBtn} onClick={() => onDelete(project._id)}>
           Delete
        </button>
      )}
    </div>
  )
}

const styles = {
  card: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
    marginBottom: '20px',
    transition: '0.3s'
  },
  title: {
    marginBottom: '10px',
    color: '#222'
  },
  deleteBtn: {
    marginTop: '10px',
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '5px',
    cursor: 'pointer'
  }
}
