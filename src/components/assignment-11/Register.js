import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { hashSync } from 'bcryptjs';

function Register() {

    let { register, handleSubmit, formState: { errors }} = useForm();

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
                    <input type="text" placeholder="Enter name" className="rounded ps-2"   {...register("name", { required: true, minLength: 4, maxLength: 12})} />
                    {errors.name?.type === "required" && (
                      <p className="text-danger">Name is required</p>
                    )}
                    {errors.name?.type === "minLength" && (
                      <p className="text-danger">Min length should be 4</p>
                    )}
                    {errors.name?.type === "maxLength" && (
                      <p className="text-danger">Max length should be 12</p>
                    )}
                </div>
            </div>
            <div className="row  p-3">
                <div className="col">
                    <input type="email" placeholder="Enter email" className="rounded ps-2"   {...register("email", {required:true})}  />
                    {errors.email?.type === "required" && (
                      <p className="text-danger">Email is required</p>
                    )}
                </div>
            </div>
            <div className="row  p-3">
                <div className="col">
                    <input type="password" placeholder='Enter password' className="rounded ps-2"  {...register("password", { required: true, minLength: 3})}  />
                    {errors.password?.type === "required" && (
                      <p className="text-danger">Password is required</p>
                    )}
                     {errors.password?.type === "minLength" && (
                      <p className="text-danger">Min length should be 3</p>
                    )}
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
