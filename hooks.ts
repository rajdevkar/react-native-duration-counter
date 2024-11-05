import { useState, useEffect } from 'react';
import { getElapsedTime, getCountdownTime } from './timeUtils';

export const useElapsedTime = (checkInTimestamp: number) => {
  const [time, setTime] = useState(getElapsedTime(checkInTimestamp));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getElapsedTime(checkInTimestamp));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [checkInTimestamp]);

  return time;
};

export const useCountdownTime = (initialTimeInSeconds: number) => {
  const [time, setTime] = useState(getCountdownTime(initialTimeInSeconds));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getCountdownTime(initialTimeInSeconds));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [initialTimeInSeconds]);

  return time;
};