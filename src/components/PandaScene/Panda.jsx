import React from 'react';
import './Panda.css';

function EyesIdle() {
  return (
    <>
      <ellipse cx="90" cy="118" rx="11" ry="12" fill="#3d2a2a"/>
      <ellipse cx="150" cy="118" rx="11" ry="12" fill="#3d2a2a"/>
      <circle cx="94" cy="113" r="3.5" fill="white"/>
      <circle cx="154" cy="113" r="3.5" fill="white"/>
      <circle cx="85" cy="121" r="1.5" fill="white" opacity="0.6"/>
      <circle cx="145" cy="121" r="1.5" fill="white" opacity="0.6"/>
    </>
  );
}

function EyesHappy() {
  return (
    <>
      <path d="M 79 113 Q 90 104 101 113" stroke="#3d2a2a" strokeWidth="3" strokeLinecap="round" fill="none"/>
      <path d="M 139 113 Q 150 104 161 113" stroke="#3d2a2a" strokeWidth="3" strokeLinecap="round" fill="none"/>
    </>
  );
}

function EyesSleepy() {
  return (
    <>
      <ellipse cx="90" cy="118" rx="10" ry="5" fill="#3d2a2a"/>
      <ellipse cx="150" cy="118" rx="10" ry="5" fill="#3d2a2a"/>
      <path d="M 80 116 Q 90 110 100 116" stroke="#ff8ec4" strokeWidth="4" fill="none"/>
      <path d="M 140 116 Q 150 110 160 116" stroke="#ff8ec4" strokeWidth="4" fill="none"/>
    </>
  );
}

function getMouthD(mood) {
  if (mood === 'happy')  return 'M 104 146 Q 120 160 136 146';
  if (mood === 'sleepy') return 'M 110 150 Q 120 146 130 150';
  if (mood === 'eating') return 'M 110 149 Q 120 157 130 149';
  return 'M 108 148 Q 120 156 132 148';
}

export default function Panda({ mood }) {
  const renderEyes = () => {
    if (mood === 'happy' || mood === 'eating') return <EyesHappy />;
    if (mood === 'sleepy') return <EyesSleepy />;
    return <EyesIdle />;
  };

  return (
    <div className={`panda-wrap ${mood}`}>
      <svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
        {/* Ears */}
        <circle cx="60" cy="68" r="32" fill="#ff8ec4"/>
        <circle cx="180" cy="68" r="32" fill="#ff8ec4"/>
        <circle cx="60" cy="68" r="20" fill="#ffb8dd"/>
        <circle cx="180" cy="68" r="20" fill="#ffb8dd"/>
        {/* Head */}
        <ellipse cx="120" cy="128" rx="78" ry="72" fill="#f8daea"/>
        {/* Eye patches */}
        <ellipse cx="90" cy="118" rx="22" ry="19" fill="#ff8ec4" transform="rotate(-12 90 118)"/>
        <ellipse cx="150" cy="118" rx="22" ry="19" fill="#ff8ec4" transform="rotate(12 150 118)"/>
        {/* Eyes */}
        <g>{renderEyes()}</g>
        {/* Nose */}
        <ellipse cx="120" cy="138" rx="9" ry="6" fill="#ff5fa8"/>
        <ellipse cx="118" cy="136" rx="3" ry="2" fill="#ffffff" opacity="0.7"/>
        {/* Mouth */}
        <path d={getMouthD(mood)} stroke="#ff3d96" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
        {/* Cheeks */}
        <ellipse cx="74" cy="148" rx="14" ry="9" fill="#ff69b4" opacity="0.4"/>
        <ellipse cx="166" cy="148" rx="14" ry="9" fill="#ff69b4" opacity="0.4"/>
        {/* Body */}
        <ellipse cx="120" cy="210" rx="54" ry="34" fill="#f8daea"/>
        <ellipse cx="78" cy="222" rx="18" ry="12" fill="#ff8ec4"/>
        <ellipse cx="162" cy="222" rx="18" ry="12" fill="#ff8ec4"/>
        <ellipse cx="120" cy="205" rx="28" ry="20" fill="#fff0f8" opacity="0.6"/>
        {/* Zzz */}
        <g className="zzz-group" visibility={mood === 'sleepy' ? 'visible' : 'hidden'}>
          <text x="170" y="88" fontFamily="Nunito, sans-serif" fontWeight="800" fontSize="13" fill="#ff5fa8" opacity="0.9">z</text>
          <text x="181" y="76" fontFamily="Nunito, sans-serif" fontWeight="800" fontSize="16" fill="#ff5fa8" opacity="0.7">z</text>
          <text x="195" y="62" fontFamily="Nunito, sans-serif" fontWeight="800" fontSize="20" fill="#ff5fa8" opacity="0.5">z</text>
        </g>
        {/* Strawberry */}
        <g visibility={mood === 'eating' ? 'visible' : 'hidden'} transform="translate(155 195) rotate(20)">
          <path d="M 0 -8 Q 14 -8 14 4 Q 14 16 0 20 Q -14 16 -14 4 Q -14 -8 0 -8 Z" fill="#e8394e"/>
          <ellipse cx="-4" cy="4" rx="1.2" ry="1.8" fill="#c02030" opacity="0.7"/>
          <ellipse cx="4" cy="2" rx="1.2" ry="1.8" fill="#c02030" opacity="0.7"/>
          <ellipse cx="0" cy="10" rx="1.2" ry="1.8" fill="#c02030" opacity="0.7"/>
          <ellipse cx="-6" cy="11" rx="1.2" ry="1.8" fill="#c02030" opacity="0.7"/>
          <ellipse cx="6" cy="10" rx="1.2" ry="1.8" fill="#c02030" opacity="0.7"/>
          <ellipse cx="-5" cy="-2" rx="3" ry="4" fill="white" opacity="0.2"/>
          <path d="M -4 -8 Q -10 -18 -2 -14" stroke="#4caf50" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <path d="M  0 -9 Q   0 -20  4 -14" stroke="#4caf50" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <path d="M  4 -8 Q  10 -18  2 -14" stroke="#4caf50" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        </g>
      </svg>
    </div>
  );
}
