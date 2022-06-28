import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'is a Psychopath'
      }
      this.onClickAlert = this.onClickAlert.bind(this)
    }
    onClickAlert(name){
        alert(`Hello ${name} ${this.state.message}`)
    }
  render() {
    return (
      <div>
        <Child About={this.onClickAlert}/>
      </div>
    )
  }
}

export default Parent