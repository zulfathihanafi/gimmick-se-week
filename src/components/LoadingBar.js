import React, { useState, useEffect } from 'react';
import './LoadingBar.css'
const audio = new Audio('/loading.mp3');
const transitAudio = new Audio('/transit.mp3');

const LoadingBar = ({ setStartLoading, setStartWord }) => {
  const [progress, setProgress] = useState(0);
  const [words,setWords] = useState('Authenticating')
  const playSound = () => {
    // Add your sound logic here
    // For example, using the HTML Audio element

    audio.play();
  };
  useEffect(() => {
    playSound()
    const simulateLoading = () => {
      const duration = 2000; // 3 seconds
      const interval = 100; // Update every 100 milliseconds
      const steps = duration / interval;

      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const newProgress = (currentStep / steps) * 100;
        setProgress(newProgress);

        if (currentStep === steps) {
          clearInterval(timer);

          // Wait for 5ms before updating state
          
          setTimeout(() => {
            setStartLoading(false);
            setStartWord(true);
            
          }, 1000);
        }
      }, interval);

      return () => clearInterval(timer);
    };

    simulateLoading();
  }, [setStartLoading, setStartWord]);

  return (
    <div>
      <h2>{words}</h2>
      <div
        style={{
          width: `${progress}%`,
          height: '20px',
          backgroundColor: '#4caf50',
          margin: '10px 0',
          transition: 'width 0.3s ease',
        }}
      ></div>
      <h3>{Number(progress).toFixed(0)} %</h3>
    </div>
  );
};

export default LoadingBar;
