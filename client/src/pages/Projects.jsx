import React from 'react'
import { useAuth } from '../context/AuthContext'
import ProjectForm from '../components/ProjectForm'
import project1 from '../assets/Projects/health.png'
import project2 from '../assets/Projects/book.png'
import project3 from '../assets/Projects/mobile.png'

export default function Projects() {
  const { user } = useAuth()

  return (
    <div style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>My Projects</h1>

      {/* ... 기존 프로젝트 카드들 유지 ... */}

      {/* ✅ 관리자에게만 보여지는 프로젝트 등록 폼 */}
      {user?.role === 'admin' && (
        <>
          <hr style={{ border: 'none', borderTop: '1px solid #ccc', margin: '40px 0' }} />
          <h2 style={{ textAlign: 'center' }}>📌 Add or Manage Projects (Admin)</h2>
          <ProjectForm />
        </>
      )}
    </div>
  )
}
