import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { hashSync } from 'bcryptjs';

function Register() {

    let { register, handleSubmit} = useForm();

    let navigate = useNavigate();

    function onRegister(newUser){

        let encryptPassword = hashSync(newUser.password, 5)
        newUser.password=encryptPassword
        
        fetch('http://localhost:4000/users',{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(newUser)
        })
        .then(response=>{
            if (response.status===201)
                navigate('/login')
        })
        .catch(err=>console.log("error is ", err))
    }
  return (
    <div className='bg-secondary d-flex align-items-center justify-content-center' style={{minHeight:"83vh"}}>
        <form  onSubmit={handleSubmit(onRegister)}>
        <div className="rounded bg-light m-5 p-5 ">
            <h1 className="text-center text-danger font-weight-bold mb-3">
                Register
            </h1>
            <div className="row  p-3">
                <div className="col">
                    <input type="text" placeholder="Enter name" className="rounded ps-2"   {...register("name")} />
                </div>
            </div>
            <div className="row  p-3">
                <div className="col">
                    <input type="email" placeholder="Enter email" className="rounded ps-2"   {...register("email")}  />
                </div>
            </div>
            <div className="row  p-3">
                <div className="col">
                    <input type="password" placeholder='Enter password' className="rounded ps-2"  {...register("password")}  />
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
        </form>
        
    </div>
  )
}

export default Register
