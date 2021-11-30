import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            logged: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => {
            return {
                logged: !prevState.logged
            }
        })
    }

    render() {
        let buttonText = this.state.logged ? "LOG OUT" : "LOG IN"
        let displayText = this.state.logged ? "You are logged in" : "You are logged out"
        return (
            <div>
                <h1>{displayText}</h1>
                <button onClick={this.handleClick}>{buttonText}</button>
            </div>
        )
    }
}

export default App