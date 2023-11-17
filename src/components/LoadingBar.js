import React, { useState, useEffect } from 'react';

const LoadingBar = ({ setStartLoading, setStartWord }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const simulateLoading = () => {
      const duration = 3000; // 3 seconds
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
          }, 500);
        }
      }, interval);

      return () => clearInterval(timer);
    };

    simulateLoading();
  }, [setStartLoading, setStartWord]);

  return (
    <div>
      <h2>Loading Bar</h2>
      <div
        style={{
          width: `${progress}%`,
          height: '20px',
          backgroundColor: '#4caf50',
          margin: '10px 0',
          transition: 'width 0.3s ease',
        }}
      ></div>
      <div>{Number(progress).toFixed(0)} %</div>
    </div>
  );
};

export default LoadingBar;
