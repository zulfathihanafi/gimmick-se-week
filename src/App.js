import './App.css';
import React, { useEffect } from "react";

import { ReactSketchCanvas } from 'react-sketch-canvas';
import LoadingBar from './components/LoadingBar';
import WelcomeAnimation from './components/WelcomeAnimation';
import BlinkingWord from './components/Blinking';

const styles = {
  border: '0.0625rem solid #9c9c9c',
  borderRadius: '0.25rem',
};

const Canvas = ({ onChange }) => {
  return (
    <ReactSketchCanvas
      style={styles}
      width="600"
      height="400"
      strokeWidth={4}
      strokeColor="black"
      onStroke={onChange}
    />
  );
};

function App() {


  const [isSigned, setIsSigned] = React.useState(false)
  const [submitted, setIsSubmitted] = React.useState(false)
  const [startLoading, setStartLoading] = React.useState(false)
  const [startWord, setStartWord] = React.useState(false)
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <body className='App-body'>


        {!submitted && (
          <>
            <Canvas onChange={() => {
              setIsSigned(true)
            }} />
            <h5> Please Sign to get Started </h5>
            <button disabled={!isSigned} className={'myButton'} onClick={() => {
              setIsSubmitted(true)
              setStartLoading(true)
            }}>Submit</button>
          </>
        )}
        {startLoading && <LoadingBar setStartLoading={setStartLoading} setStartWord={setStartWord} />}
        {startWord && <WelcomeAnimation />}
          
      </body>
    </div>
  );
}

export default App;
