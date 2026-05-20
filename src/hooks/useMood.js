import { useState, useEffect, useRef, useCallback } from 'react';

const INACTIVE_TIMEOUT = 12000;

export function useMood() {
  const [mood, setMood] = useState('idle');
  const inactiveRef = useRef(null);
  const eatingRef = useRef(null);

  const clearInactive = () => {
    if (inactiveRef.current) clearTimeout(inactiveRef.current);
  };

  const startSleepyTimer = useCallback(() => {
    clearInactive();
    inactiveRef.current = setTimeout(() => setMood('sleepy'), INACTIVE_TIMEOUT);
  }, []);

  const setActive = useCallback(() => {
    clearInactive();
    setMood('happy');
  }, []);

  const setInactive = useCallback(() => {
    setMood('idle');
    startSleepyTimer();
  }, [startSleepyTimer]);

  const startEating = useCallback(() => {
    clearInactive();
    if (eatingRef.current) clearTimeout(eatingRef.current);
    setMood('eating');
    eatingRef.current = setTimeout(() => {
      setMood('idle');
      startSleepyTimer();
    }, 2200);
  }, [startSleepyTimer]);

  useEffect(() => {
    startSleepyTimer();
    return clearInactive;
  }, [startSleepyTimer]);

  return { mood, setActive, setInactive, startEating };
}
