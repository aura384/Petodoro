import React, { useEffect, useCallback } from 'react';
import PandaScene from './components/PandaScene/PandaScene';
import Panda from './components/PandaScene/Panda';
import SpeechBubble from './components/SpeechBubble/SpeechBubble';
import MoodBadge from './components/MoodBadge/MoodBadge';
import HungerBar from './components/HungerBar/HungerBar';
import Timer from './components/Timer/Timer';
import Controls from './components/Controls/Controls';
import { useTimer } from './hooks/useTimer';
import { useHunger } from './hooks/useHunger';
import { useMood } from './hooks/useMood';
import './styles/global.css';

const MESSAGES = {
  ready:   'Ready to study? ✨',
  start:   'You got this! Studying hard! 💪',
  startBreak: 'Enjoying your break! 🌷',
  pause:   'Paused. Take a breather! 🌸',
  reset:   'Timer reset. Ready! 🌸',
  feed:    'Yummy! Thank you! 🍓',
  hungry:  "Getting a little hungry... 🥺",
  starving: "I'm so hungry! 🍓 Feed me!",
  workDone: 'Great work! Take a break 🌸',
  breakDone: 'Break over! Back to studying 📚',
};

export default function App() {
  const timer  = useTimer();
  const hunger = useHunger();
  const mood   = useMood();

  const [message, setMessage] = React.useState(MESSAGES.ready);
  const prevActive = React.useRef(false);
  const prevBreak  = React.useRef(false);

  // Detect timer reaching zero transitions
  useEffect(() => {
    const justStopped = prevActive.current && !timer.timerActive;
    const breakChanged = prevBreak.current !== timer.isBreak;

    if (justStopped && breakChanged) {
      // Timer naturally completed a phase
      setMessage(timer.isBreak ? MESSAGES.workDone : MESSAGES.breakDone);
      mood.setInactive();
    }
    prevActive.current = timer.timerActive;
    prevBreak.current  = timer.isBreak;
  }, [timer.timerActive, timer.isBreak, mood]);

  // Hunger message watcher
  useEffect(() => {
    if (hunger.hunger <= 0) setMessage(MESSAGES.starving);
    else if (hunger.hunger < 25) setMessage(MESSAGES.hungry);
  }, [hunger.hunger]);

  const handleToggle = useCallback(() => {
    timer.toggle();
    if (!timer.timerActive) {
      // Starting
      mood.setActive();
      setMessage(timer.isBreak ? MESSAGES.startBreak : MESSAGES.start);
    } else {
      // Pausing
      mood.setInactive();
      setMessage(MESSAGES.pause);
    }
  }, [timer, mood]);

  const handleReset = useCallback(() => {
    timer.reset();
    mood.setInactive();
    setMessage(MESSAGES.reset);
  }, [timer, mood]);

  const handleFeed = useCallback(() => {
    hunger.feed();
    mood.startEating();
    setMessage(MESSAGES.feed);
  }, [hunger, mood]);

  const totalTime = timer.isBreak ? timer.BREAK_TIME : timer.WORK_TIME;

  return (
    <PandaScene>
      {/* Wall clock overlay */}
      <Timer
        timerSeconds={timer.timerSeconds}
        isBreak={timer.isBreak}
        totalTime={totalTime}
      />

      {/* Panda character */}
      <Panda mood={mood.mood} />

      {/* Speech bubble above panda */}
      <SpeechBubble message={message} />

      {/* Mood badge next to panda */}
      <MoodBadge mood={mood.mood} />

      {/* Hunger bar + feed button */}
      <HungerBar
        hunger={hunger.hunger}
        getHungerStatus={hunger.getHungerStatus}
        onFeed={handleFeed}
      />

      {/* Timer controls (right side) */}
      <Controls
        timerActive={timer.timerActive}
        isBreak={timer.isBreak}
        sessions={timer.sessions}
        onToggle={handleToggle}
        onReset={handleReset}
      />
    </PandaScene>
  );
}
