import React from 'react'

function FuncClick() {
    let onClickEvent = () => {
        console.log('Button Clicked')
    } 
  return (
    <div>
        <button onClick={onClickEvent}>Function Button</button>
    </div>
  )
}

export default FuncClick