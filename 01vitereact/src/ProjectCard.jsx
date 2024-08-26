import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  padding: 1rem;
  margin: 1rem 0;
`;

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </Card>
  );
};

export default ProjectCard;
