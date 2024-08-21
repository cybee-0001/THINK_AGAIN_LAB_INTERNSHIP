import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(300); // 300 seconds = 5 minutes
  const [isActive, setIsActive] = useState(false); // To track if the timer is active

  useEffect(() => {
    let interval;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    }

    // Clear the interval on unmount or when isActive changes
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
      setSeconds((prev) => prev - 1); // Immediately decrease by 1 to avoid delay
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
