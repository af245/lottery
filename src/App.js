import './App.css';
import React from 'react';
import LotteryFunctional from "./LotteryFunctional";

function App() {
  return (
    <div className="App">
      <div className="App-Column">
        <LotteryFunctional title='Powerball' maxNum={40} numBalls={6}/>
        <LotteryFunctional title='Cash 5' maxNum={15} numBalls={5}/>
      </div>
    </div>
  );
}

export default App;
