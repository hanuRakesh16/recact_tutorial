import React, { Component } from 'react'

class Bind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'sangeetha'
      }
      this.onClick = this.onClick.bind(this)
    }
    
    onClick(){
        this.setState({
            name: 'Mootapoochi'
        })
    }
    
    // onClickBind = () => {
    //     this.setState({
    //         name: 'kutty Grinder'
    //     })
    // }
  render() {
    return (
      <div>
        <h3>{this.state.name}</h3>
        <button onClick={this.onClick}>A.K.A</button>
        {/* <button onClick={this.onClick}>Back</button> */}
        {/* <button onClick={() => this.onClick()}>Click</button> */}
        {/* <button onClick={this.onClickBind}>Click</button> */}
      </div>
    )
  }
}

export default Bind