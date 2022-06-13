import "./App.scss";
//import React, {useState, useEffect }  from 'react';
import Stopwatch from "./countdown/Countdown";
import Countdown from "./cuentatras/Countdown";
import DigitalClock from "./digitalclock/DigitalClock";

function App() {
  return (
    <div className="app">
      <DigitalClock />
      <Stopwatch />
      <Countdown />
    </div>
  );
}

export default App;
