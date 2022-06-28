import React, { Component } from 'react'

export class State extends Component {
    constructor(){
        super();
        this.state = {
            name: 'Hi'
        }
    }
    changeName(){
        this.setState({
            name: 'Bye'
        })
    }

  render() {
    return (
        <div>
            <h1>{this.state.name}</h1>
            <button onClick={() => this.changeName()}>Change</button>
        </div>
    )
  }
}

export default State