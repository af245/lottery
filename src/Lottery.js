import React from 'react';
import './Lottery.css';
import LotteryBall from './LotteryBall';

class Lottery extends React.Component{
static defaultProps ={
    title: "Powerball",
    numBalls: 6,
    maxNum: 40
}

state = { nums: Array.from({length: this.props.numBalls})}; //Array.from gives an empty array according to length

generate = e =>{

    this.setState(curState => ({
        nums: curState.nums.map(n => Math.floor(Math.random()*this.props.maxNum)+1) //loops and changes the state of nums
    }));

}



    render(){
        return(
            <div className="container">
                <div className="title">
                    <h3>{this.props.title}</h3>
                </div>
                <div className="LottoBalls">
                    {this.state.nums.map(n =>   
                        <LotteryBall num={n}/>  //loops+renders through the ball component
                        
                    )}
    
                </div>

                <button onClick={this.generate}>
                    Generate
                </button>

            </div>
        )
    }
}

export default Lottery;



























// Props:
// title 
// numBalls
// maxNum

//state
//nums: array of numbers for balls 1-40
