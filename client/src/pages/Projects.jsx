import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import ProjectForm from '../components/ProjectForm';
import ProjectCard from '../components/ProjectCard'; // ← 프로젝트 카드 컴포넌트
import axios from 'axios';

export default function Projects() {
  const { user } = useAuth();
  const [projects, setProjects] = useState([]);

  // 📦 프로젝트 목록 불러오기
  useEffect(() => {
    if (user) {
      axios.get('/api/projects')
        .then(res => setProjects(res.data))
        .catch(err => console.error(err));
    }
  }, [user]);

  // 🗑️ 삭제 함수
  const handleDelete = async (projectId) => {
    try {
      await axios.delete(`/api/projects/${projectId}`);
      setProjects(projects.filter(p => p._id !== projectId));
    } catch (err) {
      console.error('Delete failed', err);
    }
  };

  // 👤 로그인 안 한 사용자
  if (!user) {
    return (
      <div style={{ padding: '60px 20px', textAlign: 'center' }}>
        <h2>You must be signed in to view your projects</h2>
        <p>Please sign in or create an account to see your portfolio projects.</p>
      </div>
    );
  }

  // ✅ 로그인한 사용자만 아래 렌더링
  return (
    <div
      style={{
        padding: '60px 20px',
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'left'
      }}
    >
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>My Projects</h1>

      <div
        style={{
          width: '60px',
          height: '4px',
          backgroundColor: '#FFC107',
          margin: '0 auto 40px',
          borderRadius: '2px'
        }}
      ></div>

      {/* ✅ 프로젝트 카드 렌더링 */}
      {projects.map(project => (
        <ProjectCard
          key={project._id}
          project={project}
          onDelete={handleDelete}
          isAdmin={user.role === 'admin'}
        />
      ))}

      {/* ✅ 관리자만 폼 표시 */}
      {user.role === 'admin' && (
        <>
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
            Add or Manage Projects (Admin)
          </h2>
          <ProjectForm />
        </>
      )}
    </div>
  );
}
