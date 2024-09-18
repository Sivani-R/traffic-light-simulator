import React from 'react';

const YellowLight = ({ active, countdown }) => (
  <div className={`light yellow ${active ? 'active' : ''}`}>
    {active && <span>{countdown}</span>}
  </div>
);

export default YellowLight;
