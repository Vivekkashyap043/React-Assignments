import React from 'react'
import './Child.css'
function Child(props) {
  function increament(){
    props.setCounter(props.counter+1)
  }
  function decreament(){
    props.setCounter(props.counter-1)
  }
  return (
    <div className='bg-light size'>
        <div className='m-5 p-5' >
          <div className="row mt-5">
            <div className="col">
            <button type="button" class="btn btn-primary btn-lg btn-block" onClick={decreament}>Decrement Counter</button>
            </div>
            <div className="col">
            <button type="button" class="btn btn-success btn-lg btn-block" onClick={increament}>Increment Counter</button>
            </div>
          </div>
          <h1 className="text-center mt-5"><b>Child Component</b></h1>
        </div>
    </div>
  )
}
export default Child
