import React from 'react';

const Projects = ({ projects }) => (
  <div className="container mx-auto p-6">
    <h2 className="text-2xl font-bold mb-4">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((project) => (
        <div key={project.id} className="bg-gray-100 p-4 rounded shadow">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="text-gray-700">{project.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;