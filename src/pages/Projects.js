import React from 'react';
import projects from '../data/projects';

function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      {projects.map((proj, index) => (
        <div key={index} className="project-card">
          <h3>{proj.title}</h3>
          <p>{proj.description}</p>
          <a href={proj.github} target="_blank">GitHub</a>
        </div>
      ))}
    </section>
  );
}

export default Projects;