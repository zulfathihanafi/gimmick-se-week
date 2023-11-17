import './App.css';
import React from "react";

import { ReactSketchCanvas } from 'react-sketch-canvas';

const styles = {
  border: '0.0625rem solid #9c9c9c',
  borderRadius: '0.25rem',
};

const Canvas = ({onChange}) => {
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
  const [isSigned,setIsSigned] = React.useState(false)
  return (
    <div className="App">
      <header className="App-header">
        
        <Canvas onChange={()=>{
          setIsSigned(true)
        }}/>
        <button disabled={!isSigned} onClick={()=>{
          
          alert('Button is Clicked'+isSigned)
        }}>Submit</button>
      </header>
    </div>
  );
}

export default App;
