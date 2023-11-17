import logo from './logo.svg';
import './App.css';
import React from "react";
import ReactDOM from "react-dom";

import { ReactSketchCanvas } from 'react-sketch-canvas';

const styles = {
  border: '0.0625rem solid #9c9c9c',
  borderRadius: '0.25rem',
};

const Canvas = () => {
  return (
    <ReactSketchCanvas
      style={styles}
      width="600"
      height="400"
      strokeWidth={4}
      strokeColor="red"
    />
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Canvas />
      </header>
    </div>
  );
}

export default App;
