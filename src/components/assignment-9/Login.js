import React from 'react'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <div className='bg-info d-flex align-items-center justify-content-center' style={{minHeight:"83vh"}}>
        <div className="rounded bg-light m-5 p-5 w-30">
            <h1 className="text-center text-danger font-weight-bold mb-3">
                Login
            </h1>
            <div className="row  p-3">
                <div className="col">
                    <input type="email" placeholder="Enter email" className="rounded ps-2"  name="email" id="" />
                </div>
            </div>
            <div className="row  p-3">
                <div className="col">
                    <input type="password" placeholder='Enter password' className="rounded ps-2" name="password" id="" />
                </div>
            </div>
            <div className="row ">
                <div className="col ms-4 ps-4 mt-2">
                    <button className='btn btn-success' style={{width: 160}}> Login</button>
                </div>
            </div>
            <div className="row p-3">
                <p>Don't have account? <Link to="/register">Register</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Login
