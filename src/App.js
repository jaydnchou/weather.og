import React from 'react';

import Header from './components/Header';
import Forecast from './components/Forecast';

import './App.css';

const App = () => (
  <div className="current-forecast">
    <Header title="Today's Weather"/>
		<Forecast />
  </div>
);

export default App;
