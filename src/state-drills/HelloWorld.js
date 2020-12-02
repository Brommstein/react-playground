import React, { Component } from 'react';

class HelloWorld extends Component {
    state = {
        who: 'world'
    }

    handleClick = word => {
        this.setState({
            who: word
        })
    }

    render() {
        return (
            <div>
                <p>Hello, {this.state.who}!</p>
                <button onClick={() => this.handleClick('world')}>World</button>
                <button onClick={() => this.handleClick('friend')}>Friend</button>
                <button onClick={() => this.handleClick('react')}>React</button>
            </div>
        )
    }
}

class Bomb extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            console.log(this.state.count)
            const newCount = this.state.count + 1;
            this.setState({
                count: newCount
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        if (this.state.count >= 8) {
            this.componentWillUnmount();
            return 'BOOM!!!!';
        }
        else if (this.state.count % 2 === 0) {
            return 'tick';
        } else {
            return 'tock';
        }
    }
}

class RouletteGun extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chamber: null,
            spinningTheChamber: false
        }
    }

    static defaultProps = {
        bulletInChamber: 8
    }

    componentDidMount() {
        clearTimeout(this.timeout)
    }

    handleClick() {
        this.setState({
            spinningTheChamber: true
        })
        this.timeout = setTimeout(() => {
            const randomChamber = Math.ceil(Math.random() * 8)
            this.setState({
                chamber: randomChamber,
                spinningTheChamber: false
            })
        }, 2000)
    }

    renderResult() {
        if (this.state.spinningTheChamber === true) {
            return (
                <div>
                    <p>Spinning the chamber and pulling the trigger!...</p>
                </div>
            )
        } else if (this.state.chamber === this.props.bulletInChamber) {
            return (
                <div>
                    <p>BANG!!!</p>
                </div>
            )
        } else {
            return (
                <div>
                    <p>you're safe!...</p>
                </div>
            )
        }
    }

    render() {
        return (
        <div>
            <button onClick={() => this.handleClick()}>Pull the trigger!</button>
            <p>{this.renderResult()}</p>
        </div>
        )
    }
}

export default RouletteGun