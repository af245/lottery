import React from 'react';
import './LotteryBall.css';

class LotteryBall extends React.Component {
  render() {
    return (
      <div key={this.props.num} className="LotteryBall-container">
        <div className="ball">
          {this.props.num}
        </div>
      </div>
    )
  }
}

export default LotteryBall;
