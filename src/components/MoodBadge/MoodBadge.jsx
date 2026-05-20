import React from 'react';
import './MoodBadge.css';

export default function MoodBadge({ mood }) {
  return (
    <div className="mood-badge">
      <span className={`mood-dot ${mood}`} />
      <span className="mood-text">{mood}</span>
    </div>
  );
}
