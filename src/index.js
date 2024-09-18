import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';
import App from './App';
import { TrafficLightProvider } from './context/TrafficLightContext';

ReactDOM.render(
  <TrafficLightProvider>
    <App />
  </TrafficLightProvider>,
  document.getElementById('root')
);
