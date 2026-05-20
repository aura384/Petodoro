import React from 'react';
import './SpeechBubble.css';

export default function SpeechBubble({ message }) {
  return (
    <div className="speech-bubble">
      {message}
    </div>
  );
}
