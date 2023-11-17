import React, { useState, useEffect } from 'react';
import '../components/Blinking.css'; // Import a separate CSS file for styling

const BlinkingWord = ({word}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Set the interval to toggle visibility every 2000 milliseconds (adjust as needed)
    const intervalId = setInterval(() => {
      setIsVisible((prevVisible) => !prevVisible);
    }, 500);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run the effect once when the component mounts

  return (
    
      <div className={`blinking-word ${isVisible ? 'visible' : 'hidden'}`}>{word}</div>
    
  );
};

export default BlinkingWord;
