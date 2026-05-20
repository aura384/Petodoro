import React from 'react';
import './Controls.css';

const PlayIcon = () => (
  <svg width="12" height="12" viewBox="0 0 14 14" fill="currentColor">
    <polygon points="3,1 13,7 3,13"/>
  </svg>
);

const PauseIcon = () => (
  <svg width="12" height="12" viewBox="0 0 14 14" fill="currentColor">
    <rect x="2" y="1" width="4" height="12" rx="1"/>
    <rect x="8" y="1" width="4" height="12" rx="1"/>
  </svg>
);

const ResetIcon = () => (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <path d="M2.5 8a5.5 5.5 0 1 0 1.2-3.4"/>
    <polyline points="2,3 2.5,8 7,8"/>
  </svg>
);

export default function Controls({ timerActive, isBreak, sessions, onToggle, onReset }) {
  return (
    <div className="timer-controls">
      <div className={`mode-pill${isBreak ? ' break-mode' : ''}`}>
        {isBreak ? 'Break' : 'Focus'}
      </div>
      <div className="sessions-label">
        {sessions} {sessions === 1 ? 'session' : 'sessions'}
      </div>
      <div className="timer-btn-row">
        <button
          className={`toggle-btn${timerActive ? ' paused' : ''}`}
          onClick={onToggle}
        >
          {timerActive ? <PauseIcon /> : <PlayIcon />}
          {timerActive ? 'Pause' : 'Start'}
        </button>
        <button className="reset-btn" title="Reset" onClick={onReset}>
          <ResetIcon />
        </button>
      </div>
    </div>
  );
}
