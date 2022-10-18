import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [arrow, setArrow] = useState(0);
  const [arrowDirection, setArrowDirection] = useState(1);
  const [started, setStarted] = useState(false);
  let values = ["🙂", "🙌", "🛑", "🍒", "🍏", "❌", "🎅"];
  let els = values.map((i, count) =>
    <div key={count}>
      <p>{i}</p>
      <div>{ (arrow == count) ? "⬆" : "" }</div>
    </div>
  );

  function arrowDirectionUpdater() {
    if (arrow == values.length) {
      setArrowDirection(-1);
    } else if (arrow == 0 && started) {
      setArrowDirection(1);
    }
  }
  
  useEffect(() => {
    let interval = setInterval(() => {
      setArrow(arrow + arrowDirection);
    }, 1000);
    setStarted(true);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    arrowDirectionUpdater();
  }, [arrow])

  return (
    <div className="App">
      <header className="App-header">
        <div id="emojis">
          { els }
        </div>
      </header>
    </div>
  );
}

export default App;
