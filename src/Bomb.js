// your Bomb code here!
import React, { Component } from 'react';
export default class Bomb extends Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }  

    timerText = () => {
        if (this.state.secondsLeft === 0) {
          return <h4>Boom!</h4>;
            }
        return <h4>{this.state.secondsLeft} seconds left before I go boom!</h4>;
    
    }

  render() {
    return (
      <div className="cbomb">
          {this.timerText()}
      </div>
    );
  }
}