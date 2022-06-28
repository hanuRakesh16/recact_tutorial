import React, { Component } from 'react'

export class ClassClick extends Component {
    handleClick(){
        console.log('class click')
    }
    render() {
    return (
      <div>
        <button onClick={this.handleClick}>Class Click Me</button>
      </div>
    )
  }
}

export default ClassClick