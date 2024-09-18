import React from 'react';

const GreenLight = ({ active, countdown }) => (
  <div className={`light green ${active ? 'active' : ''}`}>
    {active && <span>{countdown}</span>}
  </div>
);

export default GreenLight;
