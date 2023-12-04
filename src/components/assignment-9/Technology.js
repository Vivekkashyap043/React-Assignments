import React from 'react'
import { Link, Outlet } from 'react-router-dom'
function Technology() {
  
  return (
    <div>
      <ul className="nav justify-content-center mt-5">
        <li className="nav-item">
          <Link className="nav-link" to="reactjs">
            React js
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="angular">
            Angular js
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="vue">
            Vue
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}

export default Technology
