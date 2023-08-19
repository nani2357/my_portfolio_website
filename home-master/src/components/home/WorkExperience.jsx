import React from 'react';

const WorkExperience = ({ experiences }) => {
  return (
    <div>
      <h2>Work Experience</h2>
      {experiences.map((exp, idx) => (
        <div key={idx}>
          <h3>{exp.role} at {exp.company}</h3>
          <p>{exp.duration}</p>
          <p>{exp.description}</p>
        </div>
      ))}
    </div>
  );
}

export default WorkExperience;
