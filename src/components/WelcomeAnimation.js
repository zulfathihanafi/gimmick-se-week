import React, { useState, useEffect } from 'react';
import BlinkingWord from './Blinking';

const WelcomeAnimation = ({isDivAbove, setDivAbove}) => {
  

  const handleButtonClick = () => {
    setDivAbove(!isDivAbove);
  };
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [soundInterval, setSoundInterval] = useState(350);
  const audio = new Audio('/key_cut.mp3');
  useEffect(() => {
    var spaceIndex = 0
    const welcomeText = ' Welcome To Software Engineering Week...';
    const intervalId = setInterval(() => {
      if (index < welcomeText.length) {

        playSound();

        

        setText((prevText) => prevText + welcomeText[index]);
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        setDivAbove(true)
        clearInterval(intervalId);
        // You can add your sound logic here

      }
    }, soundInterval); // Adjust the interval duration as needed

    return () => clearInterval(intervalId);
  }, [index]);

  const playSound = () => {
    // Add your sound logic here
    // For example, using the HTML Audio element

    audio.play();
  };

  return (
    <>
    <div className={`${isDivAbove?'above':''}`} style={{ display: 'flex', border:'1px dashed green', transition : 'transform 1s ease' }}>
      <h1 style={{ whiteSpace: 'break-spaces' }}>{text}</h1>
      <h1><BlinkingWord word={'|'} /></h1>
      
    </div>
    
    </>
  );
};

export default WelcomeAnimation;
