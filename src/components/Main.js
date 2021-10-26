import React, { Component } from "react";

class Main extends Component {
  state = {
    counter: 0,
    text: "Hello World!",
  };

  addOneHandler = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  addFiveHandler = () => {
    this.setState({
      counter: this.state.counter + 5,
    });
  };
  removeOneHandler = () => {
    if (this.state.counter > 0) {
      this.setState({
        counter: this.state.counter - 1,
      });
    }
  };
  removeFiveHandler = () => {
    if (this.state.counter > 4) {
      this.setState({
        counter: this.state.counter - 5,
      });
    }
  };
  resetHandler = () => {
    this.setState({
      counter: 0,
    });
  };
  render() {
    let circleClass = "";
    // if (this.state.counter === 0) {
    //   circleClass = "circle";
    // } else if (this.state.counter % 2 === 0) {
    //   circleClass = "circle even";
    // } else {
    //   circleClass = "circle odd";
    // }
    this.state.counter === 0
      ? (circleClass = "circle")
      : this.state.counter % 2 === 0
      ? (circleClass = "circle even")
      : (circleClass = "circle odd");

    return (
      <div className="display">
        <div className="counter-display">
          <h1 className={circleClass}>{this.state.counter}</h1>
        </div>
        <div className="button-display">
          <button onClick={this.addFiveHandler}>Add five</button>
          <button onClick={this.addOneHandler}>Add one</button>
          <button onClick={this.removeOneHandler}>Remove one</button>
          <button onClick={this.removeFiveHandler}>Remove five</button>
          <button onClick={this.resetHandler}>Reset</button>
        </div>
      </div>
    );
  }
}

export default Main;
