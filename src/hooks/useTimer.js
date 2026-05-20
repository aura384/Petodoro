import { useState, useEffect, useRef, useCallback } from 'react';

const WORK_TIME = 25 * 60;
const BREAK_TIME = 5 * 60;

export function useTimer() {
  const [timerActive, setTimerActive] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(WORK_TIME);
  const [isBreak, setIsBreak] = useState(false);
  const [sessions, setSessions] = useState(0);
  const intervalRef = useRef(null);

  const clearCountdown = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (!timerActive) return;

    intervalRef.current = setInterval(() => {
      setTimerSeconds(prev => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          setTimerActive(false);
          if (!isBreak) {
            setSessions(s => s + 1);
            setIsBreak(true);
            return BREAK_TIME;
          } else {
            setIsBreak(false);
            return WORK_TIME;
          }
        }
        return prev - 1;
      });
    }, 1000);

    return clearCountdown;
  }, [timerActive, isBreak, clearCountdown]);

  const toggle = useCallback(() => {
    setTimerActive(prev => !prev);
  }, []);

  const reset = useCallback(() => {
    clearCountdown();
    setTimerActive(false);
    setIsBreak(false);
    setTimerSeconds(WORK_TIME);
  }, [clearCountdown]);

  return {
    timerActive,
    timerSeconds,
    isBreak,
    sessions,
    toggle,
    reset,
    WORK_TIME,
    BREAK_TIME,
  };
}
