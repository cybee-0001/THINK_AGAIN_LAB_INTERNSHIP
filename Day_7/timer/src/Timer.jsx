import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(900); 
  const [isActive, setIsActive] = useState(false); 

  useEffect(() => {
    let interval;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const startTimer = () => {
    if (seconds > 0 && !isActive) {
      setIsActive(true);
      setSeconds((prev) => prev - 1); 
    }
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  return (
    <div>
      <h1>{formatTime(seconds)}</h1>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
    </div>
  );
}

export default Timer;
