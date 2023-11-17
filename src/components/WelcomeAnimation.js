import React, { useState, useEffect } from 'react';
import BlinkingWord from './Blinking';

const WelcomeAnimation = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [soundInterval, setSoundInterval] = useState(350);
  useEffect(() => {
    const welcomeText = 'Welcome To Software Engineering Week...';
    const intervalId = setInterval(() => {
      if (index < welcomeText.length) {
        if (welcomeText[index] != " ") {
          playSound();
        }
        if(welcomeText[index]=="S"){
          setSoundInterval(soundInterval-200)
        }
        if(welcomeText[index]=="E"){
          setSoundInterval(soundInterval-80)
        }

        setText((prevText) => prevText + welcomeText[index]);
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(intervalId);
        // You can add your sound logic here

      }
    }, soundInterval); // Adjust the interval duration as needed

    return () => clearInterval(intervalId);
  }, [index]);

  const playSound = () => {
    // Add your sound logic here
    // For example, using the HTML Audio element
    const audio = new Audio('/key_cut.mp3');
    audio.play();
  };

  return (
    <div style={{display:'flex'}}>
      <h1 style={{whiteSpace:'break-spaces'}}>{text}</h1>
      <h1><BlinkingWord word={'|'}/></h1>
    </div>
  );
};

export default WelcomeAnimation;
