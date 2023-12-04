import React from 'react'

function Reactjs() {
  return (
    <div>
      <div className='container mt-5'>
        <h1>React tutorial</h1>
        <ul>
          <li>React is a JavaScript library for building user interfaces.</li>
          <li>React is used to build single-page applications.</li>
          <li>React allows us to create reusable UI components.</li>
        </ul>
        <p>
          To learn and test React, you should set up a React Environment on your computer.
          This tutorial uses the create-react-app.
          The create-react-app tool is an officially supported way to create React applications.
          Node.js is required to use create-react-app.
          Open your terminal in the directory you would like to create your application.
          Run this command to create a React application named my-react-app: </p>
          <p>npx create-react-app my-react-app</p>
      </div>
    </div>
  )
}

export default Reactjs
