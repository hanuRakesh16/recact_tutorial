import React from 'react'


function Child(props) {
  return (
    <div>
        <button onClick={() => props.About('Meera')}>Who am I?</button>
    </div>
  )
}

export default Child