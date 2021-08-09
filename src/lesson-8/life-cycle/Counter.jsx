import React, { Component, PureComponent } from 'react';

export default class Counter extends PureComponent {
  // Chạy đầu tiên và chỉ chạy 1 lần
  // Dùng để khởi tạo state
  constructor(props) {
    super(props);
    console.log('Counter > constructor');
    this.state = {
      counter: 0,
    };
  }

  increase = () => {
    this.setState(state => ({
      counter: (state.counter += 1),
    }));
  };

  decrease = () => {
    this.setState(state => ({
      counter: (state.counter -= 1),
    }));
  };

  // Chạy lại mỗi khi component được update
  // Dùng để tránh việc component re-render không cần thiết (performance)
  // Mặc định return true (luôn luôn chạy tiếp hàm render), khi return false thì sẽ dừng
  //   shouldComponentUpdate(nextProps, nextState) {
  //     if (
  //       nextProps.randomNumber !== this.props.randomNumber ||
  //       nextState.counter !== this.state.counter
  //     ) {
  //       return true;
  //     }
  //     return false;
  //   }

  // Chạy sau constructor
  // Chạy lại mỗi khi component được update (props || setSstate || forceUpdare)
  render() {
    console.log('Counter > render');
    return (
      <div className="text-center">
        <div className="display-4">Counter: {this.state.counter}</div>
        <div>Random number prop: {this.props.randomNumber}</div>
        <button onClick={this.increase}>Increase</button>{' '}
        <button onClick={this.decrease}>Decrease</button>
      </div>
    );
  }

  // Chỉ chạy một lần
  // Chạy sau khi component đã render
  // Dùng để thực hiện các side-effects (call api, send analytics events)
  componentDidMount() {
    //   this.interval = setInterval(() => {
    //     console.log('interval');
    //   }, 1000);
    console.log('Counter > componentDidMount');
  }

  // Chạy lại mỗi khi component được update (props || setSstate || forceUpdare)
  // Chạy sau khi component đã update
  // Hạn chế dùng và khi dùng thì phải rất cẩn thận
  // Có thể dùng để call api dựa vào sự thay đổi của props
  componentDidUpdate(prevProps, prevState) {
    //   if (prevProps.useId !== this.props.useId) {
    //     callApi();
    //   }
    console.log('Counter > componentDidUpdate');
  }

  // Chỉ chạy một lần và chạy khi component bị xoá khỏi DOM
  // Dùng để loại bỏ những thứ dưa thừa trước khi component bị xoá khỏi dom (clearInterval,...)
  componentWillUnmount() {
    //   clearInterval(this.interval);
    console.log('Counter > componentWillUnmount');
  }
}
