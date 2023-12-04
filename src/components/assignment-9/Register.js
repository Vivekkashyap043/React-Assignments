import React from 'react'
import { Link } from 'react-router-dom'
function Register() {
  return (
    <div className='bg-secondary d-flex align-items-center justify-content-center' style={{minHeight:"83vh"}}>
        <div className="rounded bg-light m-5 p-5 ">
            <h1 className="text-center text-danger font-weight-bold mb-3">
                Register
            </h1>
            <div className="row  p-3">
                <div className="col">
                    <input type="text" placeholder="Enter name" className="rounded ps-2"  name="email" id="" />
                </div>
            </div>
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
                    <button className='btn btn-success' style={{width: 160}}> Register</button>
                </div>
            </div>
            <div className="row p-3">
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Register
