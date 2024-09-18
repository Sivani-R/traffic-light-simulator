import React, { useContext } from 'react';
import TrafficLightContext from '../context/TrafficLightContext';

const PedestrianButton = () => {
  const { state, dispatch } = useContext(TrafficLightContext);

  const requestCrossing = () => {
    if (!state.pedestrianRequest && state.currentLight !== 'red') {
      dispatch({ type: 'REQUEST_CROSSING' });
    }
  };

  return (
    <button className="pedestrian-button" onClick={requestCrossing}>
      Request Crossing
    </button>
  );
};

export default PedestrianButton;
