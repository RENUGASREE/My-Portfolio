import React from 'react';

function Button({ text, link }) {
  return (
    <a href={link} className="cta-button" target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  );
}

export default Button;