import { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { counter : 0 };
        this.handleIncrement = this.handleIncrement.bind(this);
    }
    
    handleIncrement() {
        this.setState((prev) => {
            return {
                counter: prev.counter + 1
            }
        });
    }

    handleDecrement = () => {
        this.setState(prev => {
            return {
                counter: prev.counter - 1
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Counter App</h1>
                <p>Count: {this.state.counter}</p>
                <button onClick={this.handleIncrement}>Increment</button>
                <button onClick={this.handleDecrement}>Decrement</button>
            </div>
        );
    }
}

export default Counter;