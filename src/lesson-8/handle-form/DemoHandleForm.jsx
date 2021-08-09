import React, { Component } from 'react';

export default class DemoHandleForm extends Component {
  state = {
    email: '',
    password: '',
  };

  handleOnChage = event => {
    // console.log(event.target.name, event.target.value);
    const { name, value } = event.target;
    this.setState(
      {
        [name]: value,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handleSubmit = event => {
    // Ngăn chặn việc reload page khi submmit
    event.preventDefault();
    console.log('submitted!');
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Email address</label>
            <input
              className="form-control"
              name="email"
              value={this.state.email}
              onChange={this.handleOnChage}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={this.state.password}
              onChange={this.handleOnChage}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
