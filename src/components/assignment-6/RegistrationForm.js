import { useForm } from "react-hook-form";
import {useState} from 'react'
import './RegisterForm.css'
function RegistrationForm() {

    let [users,setUsers]=useState([])


  let { register, handleSubmit, formState: { errors }} = useForm();

  function handleFormSubmit(userObj) {
    setUsers([...users,userObj])
  }

  return (
    <div className="back">
        <div className="container d-flex justify-content-center">
          <div className="col-sm-7 mt-5">
      <form
        className="w-100 mx-auto mt-5 border p-4 bg-light"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
            <h1 className="display-3 text-center text-primary">
                Registration Form
            </h1>
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="firstname" className="form-label">
                      First Name
                    </label>
                    <input type="text" id="firstname" className="form-control" {...register("firstname", { required: true, minLength: 4, maxLength: 6, })} />
                    {/* validation error message of firstname */}
                    {errors.firstname?.type === "required" && (
                      <p className="text-danger">First Name is required</p>
                    )}
                    {errors.firstname?.type === "minLength" && (
                      <p className="text-danger">Min length should be 4</p>
                    )}
                    {errors.firstname?.type === "maxLength" && (
                      <p className="text-danger">Max length should be 6</p>
                    )}
                  </div>
                </div>
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="lastname" className="form-label">
                      Last Name
                    </label>
                    <input type="text" id="lastname" className="form-control" {...register("lastname", { required: true, minLength: 4, maxLength: 6, })} />
                    {/* validation error message of lastname */}
                    {errors.lastname?.type === "required" && (
                      <p className="text-danger">Last Name is required</p>
                    )}
                    {errors.lastname?.type === "minLength" && (
                      <p className="text-danger">Min length should be 4</p>
                    )}
                    {errors.lastname?.type === "maxLength" && (
                      <p className="text-danger">Max length should be 6</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="dof" className="form-label">
                      Date of birth
                    </label>
                    <input type="date" id="dob" className="form-control" {...register("dob", { required: true, minLength: 4, maxLength: 6, })} />
                    {/* validation error message of dob */}
                    {errors.firstname?.type === "required" && (
                      <p className="text-danger">Date of birth is required</p>
                    )}
                  </div>
                </div>
                <div className="col">
                  <div className="mb-3">
                    <label>Gender</label>
                    {/* male */}
                    <div style={{ display: 'flex', flexDirection: 'row', marginTop: 7 }}>
                      <div className="form-check">
                        <input type="radio" id="m" className="form-check-input" value="male" {...register("gender")} />
                        <label htmlFor="m" className="form-check-label">Male</label>
                      </div>
                      <div className="form-check ms-3">
                        <input type="radio" id="f" className="form-check-input" value="female" {...register("gender")} />
                        <label htmlFor="f" className="form-check-label">Female</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input type="email" id="email" className="form-control" {...register("email", { required: true })} />
                    {/* validation error message of email */}
                    {errors.email?.type === "required" && (
                      <p className="text-danger">Email is required</p>
                    )}
                  </div>

                </div>
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                      Mobile number
                    </label>
                    <input type="tel" id="phone" className="form-control" {...register("phone", { required: true, minLength: 10, maxLength: 10 })} />
                    {/* validation error message of mobile number */}
                    {errors.phone?.type === "required" && (
                      <p className="text-danger">Mobile number is required</p>
                    )}
                       {errors.phone?.type === "minLength" && (
                      <p className="text-danger">Mobile number should contains 10 digits</p>
                    )}
                    {errors.phone?.type === "maxLength" && (
                      <p className="text-danger">Mobile number should contains 10 digits</p>
                    )}
                  </div>

                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="subject">Subject</label>
                    <select id="subject" className="form-select" {...register('subject', { required: true })} defaultValue="">
                      <option value="" disabled>Choose options</option>
                      <option value="c">C</option>
                      <option value="cpp">C++</option>
                      <option value="java">Java</option>
                      <option value="python">Python</option>
                      <option value="java">React js</option>
                      <option value="python">JavaScript</option>
                    </select>
                  </div>
                  {/* validation error message for subject */}
                  {errors.subject?.type === "required" && (
                    <p className="text-danger">Please select a subject</p>
                  )}
                </div>
              </div>
            </div>
        <button className="btn btn-primary m-2">Submit</button>
      </form>
          </div>
        </div>
    </div>
  )
}

export default RegistrationForm
