# Petodoro

A cozy Pomodoro study companion with an animated panda friend. Explore it [here](https://petodoro.vercel.app/)!

## Project Structure

```
study-pet/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── PandaScene/
│   │   │   ├── PandaScene.jsx   # Room SVG background + title/footer layout
│   │   │   ├── PandaScene.css
│   │   │   ├── Panda.jsx        # Animated panda character (mood-aware)
│   │   │   └── Panda.css        # Panda mood animations (float, bounce, sway, nom)
│   │   ├── SpeechBubble/
│   │   │   ├── SpeechBubble.jsx # Panda speech/message bubble
│   │   │   └── SpeechBubble.css
│   │   ├── MoodBadge/
│   │   │   ├── MoodBadge.jsx    # Mood indicator pill (idle/happy/sleepy/eating)
│   │   │   └── MoodBadge.css
│   │   ├── HungerBar/
│   │   │   ├── HungerBar.jsx    # Hunger progress bar + feed button
│   │   │   └── HungerBar.css
│   │   ├── Timer/
│   │   │   ├── Timer.jsx        # SVG clock overlay with progress ring
│   │   │   └── Timer.css
│   │   └── Controls/
│   │       ├── Controls.jsx     # Start/Pause + Reset buttons + session counter
│   │       └── Controls.css
│   ├── hooks/
│   │   ├── useTimer.js          # Pomodoro countdown logic (25min work / 5min break)
│   │   ├── useHunger.js         # Hunger drain + feed logic
│   │   └── useMood.js           # Mood state machine (idle → happy → sleepy → eating)
│   ├── utils/
│   │   └── formatTime.js        # MM:SS formatter
│   ├── styles/
│   │   └── global.css           # CSS variables, reset, font import
│   ├── App.jsx                  # Root controller — wires all hooks + components
│   └── index.js                 # React entry point
└── package.json
```

## Getting Started

```bash
npm install
npm start
```

Then open [http://localhost:3000](http://localhost:3000).

## Features

- **25-minute Pomodoro timer** with 5-minute breaks
- **Animated panda** with 4 moods: idle (floating), happy (bouncing), sleepy (swaying), eating (nom nom)
- **Hunger system** — panda gets hungry over time, feed her strawberries!
- **Wall clock** with animated progress ring
- **Cozy room background** with fairy lights, bookshelf, desk, and window

## Architecture

State lives in custom hooks (`useTimer`, `useHunger`, `useMood`) and flows down through `App.jsx` as props. Each component is self-contained with its own CSS file using the shared CSS variables from `global.css`.
