import React, { Component } from 'react';
import Counter from './Counter';

export default class DemoLifeCycle extends Component {
  constructor(props) {
    super(props);
    console.log('DemoLifeCycle > constructor');
    this.state = {
      isRemoveCounter: false,
      number: 0,
    };
  }

  removeCounter = () => {
    this.setState({ isRemoveCounter: true });
  };

  randomNumber = () => {
    this.setState({ number: Math.random() });
  };

  render() {
    console.log('DemoLifeCycle > render');
    return (
      <div className="text-center">
        <div className="display-4">Random Number: {this.state.number}</div>
        <button onClick={this.randomNumber}>Random</button>
        <button onClick={this.removeCounter}>Remove Counter</button>
        {!this.state.isRemoveCounter && (
          <Counter randomNumber={this.state.number} />
        )}
      </div>
    );
  }

  componentDidMount() {
    console.log('DemoLifeCycle > componentDidMount');
  }
}
