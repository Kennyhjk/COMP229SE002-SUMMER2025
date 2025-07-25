import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import ProjectForm from '../components/ProjectForm';
import ProjectCard from '../components/ProjectCard'; // ✅ 추가

export default function Projects() {
  const { user } = useAuth();
  const [projects, setProjects] = useState([]);

  // ✅ 프로젝트 목록 불러오기
  useEffect(() => {
    axios.get('/api/projects')
      .then(res => setProjects(res.data))
      .catch(err => console.error('Failed to fetch projects:', err));
  }, []);

  // ✅ 삭제 함수 (선택사항)
  const handleDelete = async (id) => {
    const token = localStorage.getItem('jwt');
    try {
      await axios.delete(`/api/projects/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setProjects(projects.filter(p => p._id !== id));
    } catch (err) {
      console.error('Delete failed:', err);
    }
  };

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

      {/* ✅ 여기에 프로젝트 카드 출력 */}
      {projects.map(project => (
        <ProjectCard
          key={project._id}
          project={project}
          isAdmin={user?.role === 'admin'}
          onDelete={handleDelete}
        />
      ))}

      {/* ✅ 관리자 전용 프로젝트 폼 */}
      {user?.role === 'admin' && (
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
