import React, { createContext, useReducer, useEffect } from 'react';

const initialState = {
  currentLight: 'green',       // Initial light is green
  pedestrianRequest: false,    // No pedestrian request initially
  countdown: 10,               // Countdown for green light initially (10 seconds)
};

const TrafficLightContext = createContext(initialState);

const trafficLightReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_LIGHT':
      return { ...state, currentLight: action.payload, countdown: action.countdown };
    case 'REQUEST_CROSSING':
      return { ...state, pedestrianRequest: true };
    case 'RESET_CROSSING':
      return { ...state, pedestrianRequest: false };
    case 'UPDATE_COUNTDOWN':
      return { ...state, countdown: action.payload };
    default:
      return state;
  }
};

export const TrafficLightProvider = ({ children }) => {
  const [state, dispatch] = useReducer(trafficLightReducer, initialState);

  useEffect(() => {
    const interval = setInterval(() => {
      if (state.countdown === 0) {
        switch (state.currentLight) {
          case 'green':
            dispatch({ type: 'CHANGE_LIGHT', payload: 'yellow', countdown: 3 });
            break;
          case 'yellow':
            dispatch({ type: 'CHANGE_LIGHT', payload: 'red', countdown: 7 });
            break;
          case 'red':
            if (state.pedestrianRequest) {
              dispatch({ type: 'RESET_CROSSING' });
              dispatch({ type: 'CHANGE_LIGHT', payload: 'red', countdown: 5 });
            } else {
              dispatch({ type: 'CHANGE_LIGHT', payload: 'green', countdown: 10 });
            }
            break;
          default:
            break;
        }
      } else {
        dispatch({ type: 'UPDATE_COUNTDOWN', payload: state.countdown - 1 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [state]);

  return (
    <TrafficLightContext.Provider value={{ state, dispatch }}>
      {children}
    </TrafficLightContext.Provider>
  );
};

export default TrafficLightContext;
