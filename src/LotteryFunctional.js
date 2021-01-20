import React, {useState, useEffect} from "react";
import LotteryBall from "./LotteryBall";
import './Lottery.css';

const generate = (current, maxNum) => {
  return current.map(n => Math.floor(Math.random() * maxNum) + 1);
};

const LotteryFunctional = (props) => {
  const [nums, setNums] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const numArray = (new Array(props.numBalls)).fill(null);
    setNums(generate(numArray, props.maxNum));
  }, [props.numBalls, props.maxNum, count]);

  return (
    <div className="container">
      <div className="title">
        <h3>{props.title}</h3>
      </div>
      <div className="LottoBalls">
        {count !== 0 && nums.map(n => <LotteryBall num={n}/>)}
      </div>
      <button onClick={() => setCount(count => count + 1)}>
        Generate
      </button>
    </div>
  );
};

export default LotteryFunctional;
