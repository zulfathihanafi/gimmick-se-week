import React, { useState, useEffect } from 'react';

const CelebrationComponent = () => {
  const [celebrating, setCelebrating] = useState(false);

  useEffect(() => {
    if (celebrating) {
      // Display celebration for 3 seconds
      const timeout = setTimeout(() => {
        setCelebrating(false);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [celebrating]);

  const startCelebration = () => {
    setCelebrating(true);
  };

  return (
    <div>
      <button onClick={startCelebration}>Celebrate!</button>
      {celebrating && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <h2>Congratulations!</h2>
          <img
            src="https://media.giphy.com/media/3o7buirYcmV5nSwIRW/giphy.gif"
            alt="Celebration"
            style={{ width: '200px', height: '200px', borderRadius: '50%' }}
          />
        </div>
      )}
    </div>
  );
};

export default CelebrationComponent;
