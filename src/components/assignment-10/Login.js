import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { compareSync } from 'bcryptjs';

function Login() {

    let { register, handleSubmit} = useForm();
    let navigate = useNavigate()

    function onLogin(user){
        fetch(`http://localhost:4000/users?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            if(data.length===0)
                alert('invalid email')
            else{
                let result = compareSync(user.password, data[0].password )
                if(result===true)
                    navigate('/dashboard')
            }
        })
    }
  return (
    <div className='bg-info d-flex align-items-center justify-content-center' style={{minHeight:"83vh"}}>
        <form onSubmit={handleSubmit(onLogin)}>
        <div className="rounded bg-light m-5 p-5 w-30">
            <h1 className="text-center text-danger font-weight-bold mb-3">
                Login
            </h1>
            <div className="row  p-3">
                <div className="col">
                    <input type="email" placeholder="Enter email" className="rounded ps-2"   {...register("email")} />
                </div>
            </div>
            <div className="row  p-3">
                <div className="col">
                    <input type="password" placeholder='Enter password' className="rounded ps-2"  {...register("password")} />
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
        </form>
    </div>
  )
}

export default Login
