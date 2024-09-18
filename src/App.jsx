import React from 'react';
import TrafficLight from './components/TrafficLight';
import PedestrianButton from './components/PedestrianButton';

const App = () => {
  return (
    <div className="app">
      <TrafficLight />
      <PedestrianButton />
    </div>
  );
};

export default App;
