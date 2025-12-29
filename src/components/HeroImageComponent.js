import React from 'react';

const HeroImageComponent = ({ header, text }) => {
  return (
    <di className="modular-hero-section">
      <div className="text-box">
        <h1>{header}</h1>
        <p>{text}</p>
      </div>
    </di>
  );
};

export default HeroImageComponent;
