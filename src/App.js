import React, { useRef, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Webcam from './Webcam';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Webcam/>
      </header>
    </div>
  );
}

export default App;
