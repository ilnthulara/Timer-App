import React, { useState, useEffect } from 'react';
import './App.css';

//state
const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  //Effect Hook
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);

    //The clearInterval function is returned within the cleanup function to clear the 
    //interval when the component is unmounted or when the useEffect dependencies change.
    return () => clearInterval(interval);
  }, []);

  //The formatTime function takes a number of seconds as input and formats it into a string 
  //representing minutes and seconds (in MM:SS format).
  const formatTime = time => {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className="timer">
      <h1>Timer App</h1>
      {/* The formatTime function formats the seconds state variable, which represents the elapsed time, and displays it in the paragraph. */}
      <p>Elapsed Time: {formatTime(seconds)}</p>
    </div>
  );
};

export default Timer;
