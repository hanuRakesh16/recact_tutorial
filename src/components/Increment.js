import React, { Component } from 'react'

export class Increment extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         initial : 0,
      }
    }
    increment(){
        // this.setState({
        //     initial : this.state.initial + 1
        // },
        // () => {
        //     console.log(this.state.initial)
        // })
        this.setState(prevState => ({
            initial: prevState.initial + 1
        }))
    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

  render() {
    return (
      <div>
        <h1>Count: {this.state.initial} </h1>
        <button onClick={() => this.incrementFive()}>Increase</button>
      </div>
    )
  }
}

export default Increment