import React, { useContext } from 'react';
import GreenLight from './GreenLight';
import YellowLight from './YellowLight';
import RedLight from './RedLight';
import TrafficLightContext from '../context/TrafficLightContext';
import '../styles/TrafficLight.css';

const TrafficLight = () => {
  const { state } = useContext(TrafficLightContext);

  return (
    <div className="traffic-light">
      <RedLight active={state.currentLight === 'red'} countdown={state.countdown} />
      <YellowLight active={state.currentLight === 'yellow'} countdown={state.countdown} />
      <GreenLight active={state.currentLight === 'green'} countdown={state.countdown} />
    </div>
  );
};

export default TrafficLight;
