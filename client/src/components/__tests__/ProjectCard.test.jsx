import React from 'react'; // Import React for JSX
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import jest-dom for additional matchers
import ProjectCard from '../ProjectCard';

test('renders project title', () => {
  const dummyProject = {
    title: 'Test Project',
    duration: '3 months',
    description: 'Test description',
    _id: 'abc123'
  };

  render(<ProjectCard project={dummyProject} isAdmin={false} />);
  expect(screen.getByText('Test Project')).toBeInTheDocument();
});
