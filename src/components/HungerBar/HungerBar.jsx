import React from 'react';
import './HungerBar.css';

const StrawberryIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 4 Q17 4 17 10 Q17 17 10 19 Q3 17 3 10 Q3 4 10 4 Z" fill="#e8394e"/>
    <ellipse cx="8" cy="9" rx="0.9" ry="1.3" fill="#c02030" opacity="0.7"/>
    <ellipse cx="12" cy="8" rx="0.9" ry="1.3" fill="#c02030" opacity="0.7"/>
    <ellipse cx="10" cy="13" rx="0.9" ry="1.3" fill="#c02030" opacity="0.7"/>
    <ellipse cx="7.5" cy="6.5" rx="2" ry="3" fill="white" opacity="0.22"/>
    <path d="M8 4 Q5 -1 9 2" stroke="#4caf50" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
    <path d="M10 3 Q10 -2 12 2" stroke="#4caf50" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
    <path d="M12 4 Q15 -1 11 2" stroke="#4caf50" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
  </svg>
);

export default function HungerBar({ hunger, getHungerStatus, onFeed }) {
  const { label, color } = getHungerStatus();

  return (
    <div className="hunger-section">
      <div className="hunger-label-row">
        <span>🍓 Hunger</span>
        <span>{label}</span>
      </div>
      <div className="hunger-track">
        <div
          className="hunger-fill"
          style={{ width: `${hunger}%`, background: color }}
        />
      </div>
      <button className="feed-btn" onClick={onFeed}>
        <StrawberryIcon />
        Feed me!
      </button>
    </div>
  );
}
