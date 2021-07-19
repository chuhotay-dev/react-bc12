import React, { Component } from 'react'

export default class DemoHandlingEvents extends Component {

    // Hàm không tham số
    greeting = () => {
        alert('Welcome to my channel!');
    }

    // Hàm có tham số
    subcribe = name => {
        alert(`Thanks ${name} for subcribing!`)
    }

    render() {
        return (
            <div>
                <button onClick={this.greeting} className="btn btn-info">Click me!</button>
                <button onClick={() => this.subcribe('Tay')} className="btn btn-danger">Subscribe</button>
            </div>
        )
    }
}
