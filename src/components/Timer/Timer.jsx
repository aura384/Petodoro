import React from 'react';
import { formatTime } from '../../utils/formatTime';
import './Timer.css';

const CLOCK_CX = 600;
const CLOCK_CY = 160;
const CLOCK_R  = 52;
const CIRC = 2 * Math.PI * CLOCK_R;

export default function Timer({ timerSeconds, isBreak, totalTime }) {
  const pct  = (totalTime - timerSeconds) / totalTime;
  const dash = pct * CIRC;
  const strokeColor = isBreak ? '#f4afc0' : '#e8497a';
  const dotColor    = isBreak ? '#f4afc0' : '#e8497a';

  return (
    <svg
      className="clock-overlay"
      viewBox="0 0 1200 700"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Progress ring */}
      <circle
        className="clock-progress"
        cx={CLOCK_CX}
        cy={CLOCK_CY}
        r={CLOCK_R}
        fill="none"
        stroke={strokeColor}
        strokeWidth="7"
        strokeLinecap="round"
        strokeDasharray={`${dash} ${CIRC}`}
        transform={`rotate(-90 ${CLOCK_CX} ${CLOCK_CY})`}
      />
      {/* Timer text */}
      <text
        x={CLOCK_CX}
        y={CLOCK_CY + 8}
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="Nunito, sans-serif"
        fontWeight="800"
        fontSize="24"
        fill="#4a2d3a"
      >
        {formatTime(timerSeconds)}
      </text>
      {/* Mode dot */}
      <circle cx={CLOCK_CX} cy={CLOCK_CY + 38} r="5" fill={dotColor} opacity="0.7" />
    </svg>
  );
}
