import React from 'react';
import './Lottery.css';
import LotteryBall from './LotteryBall';

class Lottery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nums: Array.from({length: props.numBalls}) };
  }

  static defaultProps = {
    title: "Powerball",
    numBalls: 6,
    maxNum: 40,

  };

  generate = e => {
    this.setState(current => ({
      nums: current.nums.map(n => Math.floor(Math.random() * this.props.maxNum) + 1) //loops and changes the state of nums
    }));
  };

  render() {

    return (
      <div className="container">
        <div className="title">
          <h3>{this.props.title}</h3>
        </div>
        <div className="LottoBalls">
          {this.state.nums.map(n => <LotteryBall num={n}/>)}
        </div>

        <button onClick={this.generate}>
          Generate
        </button>

      </div>
    )
  }
}

export default Lottery;
