import React from 'react'
import A from './A';
import B from './B';
import C from './C';

function Root() {
  return (
    <div>
      <h1 className="text-center bg-success m-2">React Assignment - 2 </h1>
      <div className='bg-primary text-center'>
      <div className="container p-2">
        <h1>Root</h1>
        <A />
        <B  />
        <C />
      </div>
    </div>
    </div>

  )
}

export default Root
