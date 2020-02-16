/* eslint-disable no-magic-numbers */
import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  state = {
    count: 0,
  };
  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return <div>
      <h1>{this.state.count}</h1>
      <button onClick={this.increment}>  + </button>
      <button onClick={this.decrement}> - </button>
    </div>
  }
}

render(<div><App /> <App /></div>, document.getElementById('root'));