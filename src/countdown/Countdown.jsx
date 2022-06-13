import React, { useState, useEffect } from "react";
import "./Countdown.scss";
const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);
  //console.log("0" + ((time / 10) % 100));
  return (
    <div className="stopwatch">
      <h2>⏱{time}</h2>
      <span>⏰{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
      <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      <br /> <br />
      <div id="buttons">
        {!timerOn && time === 0 && (
          <button onClick={() => setTimerOn(true)}>Start</button>
        )}
        {timerOn && <button onClick={() => setTimerOn(false)}>Stop</button>}
        {!timerOn && time > 0 && (
          <button onClick={() => setTime(0)}>Reset</button>
        )}
        {!timerOn && time > 0 && (
          <button onClick={() => setTimerOn(true)}>Reinicio</button>
        )}
      </div>
      {/* <button onClick={() => setTimerOn(true)}>Start</button>
      <button onClick={() => setTimerOn(false)}>Stop</button>
      <button onClick={() => setTimerOn(true)}>Resume</button>
      <button onClick={() => setTime(0)}>Reset</button> */}
    </div>
  );
};
export default Stopwatch;
