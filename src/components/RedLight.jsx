import React from 'react';

const RedLight = ({ active, countdown }) => (
  <div className={`light red ${active ? 'active' : ''}`}>
    {active && <span>{countdown}</span>}
  </div>
);

export default RedLight;
