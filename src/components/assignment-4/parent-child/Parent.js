import {useState} from 'react'
import Child from './Child';
import './Parent.css'
function Parent() {
    let [counter, setCounter] = useState(0);
  return (
        <div className='text-center bg-danger p-5 m-5'>
      <h1><b>Parent Pomponent</b></h1>
      <h3>counter</h3>
      <h1>{counter}</h1>
      <Child setCounter={setCounter} counter={counter}/>
    </div>
  )
}
export default Parent
