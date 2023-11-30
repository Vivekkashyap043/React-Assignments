import { useForm } from "react-hook-form";
import { useState } from 'react'
import UserList from "./UserList";
function AddUser() {

    //users state
    let [users, setUsers] = useState([])
    let {register, handleSubmit, formState: { errors },} = useForm();

    function handleFormSubmit(userObj) {
        setUsers([...users, userObj])
    }

    console.log(users)

    return (
        <div>
            <h1 className=" text-center text-primary mt-3">
                   <u> React Assignment - 7</u>
            </h1>
        <div className="row">
            <div className="col-sm-4">
            <h2 className="display-3 text-center text-info mt-5">User Registration</h2>
                <form
                    className="w-100 mx-auto mt-5 border p-4 bg-light"
                    onSubmit={handleSubmit(handleFormSubmit)}
                >
                    {/* username */}
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                            Username
                        </label>
                        <input type="text" id="username" className="form-control" {...register("username", { required: true, minLength: 4, maxLength: 8, })} />
                        {errors.username?.type === "required" && (
                            <p className="text-danger">Username is required</p>
                        )}
                        {errors.username?.type === "minLength" && (
                            <p className="text-danger">Min length shd be 4</p>
                        )}
                        {errors.username?.type === "maxLength" && (
                            <p className="text-danger">Max length shd be 8</p>
                        )}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Date of birth
                        </label>
                        <input type="date" id="dob" className="form-control" {...register("dob", { required: true })}/>
                        {errors.dob?.type === "required" && (
                            <p className="text-danger">dob is required</p>
                        )}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="state">City</label>
                        <input type="text" id="city" className="form-control" {...register("city", { required: true })}/>
                    </div>
                    {errors.city?.type === "required" && (
                        <p className="text-danger">City is required</p>
                    )}
                    <button className="btn btn-success">Register</button>
                </form>
            </div>
            <div className="col">
                <UserList users={users} />
            </div>
        </div>
        </div>

    );
}

export default AddUser;