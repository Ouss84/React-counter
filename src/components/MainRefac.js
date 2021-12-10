import React, { Component } from "react";

class MainRefac extends Component {
  state = {
    counter: 0,
  };
  addOneHandler = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  removeOnehandler = () => {
    if (this.state.counter > 0) {
      this.setState({
        counter: this.state.counter - 1,
      });
    }
  };
  resetHandler = () => {
    this.setState({
      counter: 0,
    });
  };
  render() {
    return (
      <div>
        <div>
          <h1>{this.state.counter}</h1>
        </div>
        <div>
          <button onClick={this.addOneHandler}>Add one</button>
          <button onClick={this.removeOnehandler}>Remove one</button>
          <button onClick={this.resetHandler}>Reset</button>
        </div>
      </div>
    );
  }
}
export default MainRefac;
