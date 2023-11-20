import './App.css';
// import './Test.scss'
import React, { useEffect } from "react";

import { ReactSketchCanvas } from 'react-sketch-canvas';
import LoadingBar from './components/LoadingBar';
import WelcomeAnimation from './components/WelcomeAnimation';
import BlinkingWord from './components/Blinking';
import CelebrationComponent from './components/Celebrate';
import TriangleComponent from './components/Triangle';

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

  const [isDivAbove, setDivAbove] = React.useState(false);
  const [isSigned, setIsSigned] = React.useState(false)
  const [submitted, setIsSubmitted] = React.useState(false)
  const [startLoading, setStartLoading] = React.useState(false)
  const [startWord, setStartWord] = React.useState(false)
  const [isTriangleVisible, setTriangleVisibility] = React.useState(false);

  const handleButtonClick = () => {
    setTriangleVisibility(true);
  };
  return (
    <div className="App">
      <header className="App-header" >

      </header>
      <body className={`App-body ${isDivAbove ? ('change') : ''}`} >
        <div className='container'>
          {!submitted && (
            <>
              <Canvas onChange={() => {
                setIsSigned(true)
              }} />
              <h3> Please Sign to get Started </h3>
              <button disabled={!isSigned} className={'myButton'} onClick={() => {
                setIsSubmitted(true)
                setStartLoading(true)
              }}>Submit</button>
            </>
          )}

          {startLoading && <LoadingBar setStartLoading={setStartLoading} setStartWord={setStartWord} />}
          {startWord && <WelcomeAnimation isDivAbove={isDivAbove} setDivAbove={setDivAbove} />}
          <div className={`above-image ${isDivAbove ? 'fade-in' : ''} ${isDivAbove ? 'visible' : 'hidden'}`} style={{ position: 'absolute' }} >
            {<img src='/tentative.jpeg' width={'70%'} />}
          </div>
        </div>
      </body>

    </div>
  );
}

export default App;
