import React from 'react';

const Certifications = ({ certifications }) => (
  <div className="container mx-auto p-6">
    <h2 className="text-2xl font-bold mb-4">Certifications</h2>
    <ul className="list-disc pl-6 text-gray-700">
      {certifications.map((cert) => (
        <li key={cert.id}>{cert.name} - {cert.issuer}</li>
      ))}
    </ul>
  </div>
);

export default Certifications;