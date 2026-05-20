import { useState, useEffect, useCallback } from 'react';

const HUNGER_DRAIN_INTERVAL = 8000;
const FEED_AMOUNT = 25;

export function useHunger() {
  const [hunger, setHunger] = useState(80);

  useEffect(() => {
    const interval = setInterval(() => {
      setHunger(prev => Math.max(0, prev - 1));
    }, HUNGER_DRAIN_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  const feed = useCallback(() => {
    setHunger(prev => Math.min(100, prev + FEED_AMOUNT));
  }, []);

  const getHungerStatus = () => {
    if (hunger >= 75) return { label: '😊 Full', color: 'linear-gradient(90deg, #f4afc0, #e8497a)' };
    if (hunger >= 40) return { label: '🙂 Content', color: 'linear-gradient(90deg, #f4afc0, #e8497a)' };
    if (hunger >= 15) return { label: '🥺 Hungry', color: 'linear-gradient(90deg, #f9c58a, #f4a862)' };
    return { label: '😢 Starving', color: 'linear-gradient(90deg, #f9a0a0, #e85050)' };
  };

  return { hunger, feed, getHungerStatus };
}
