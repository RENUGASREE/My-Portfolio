import React from 'react';
import skills from '../data/skills';

function Skills() {
  return (
    <section className="skills">
      <h2>Skills</h2>
      {Object.entries(skills).map(([category, items]) => (
        <div key={category}>
          <h3>{category}</h3>
          <ul>
            {items.map((skill, index) => <li key={index}>{skill}</li>)}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Skills;