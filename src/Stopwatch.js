import React, { useState, useEffect } from 'react';

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(false);

//   useEffect(() => {
//     return () => clearInterval(intervalId);
//   }, [intervalId]);

  const start = () => {
    if (!intervalId) {
      const id = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
      setIntervalId(id);
      console.log(id)
    }
  };

  const stop = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const reset = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setTime(0);
  };

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600); // 60 min * 60 sec
    const minutes = Math.floor((timeInSeconds % 3600) / 60); // 60*60
    const seconds = timeInSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <div>{formatTime(time)}</div>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Stopwatch;
