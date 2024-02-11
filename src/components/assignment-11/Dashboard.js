import React from 'react';
import { useLocation } from 'react-router-dom';
import './Dashboard.css'

function Dashboard() {

  let {state} = useLocation();

  return (
    <div>
       <div className='navbar bg-warning pt-2 pb-2'>
        <h1 className='ps-5'>User Dashboard</h1>
      </div>
      <div className="container-fluid">
        <div className="row" style={{height:"34rem"}}>
          <div className="col-4 part mt-1 " style={{borderRight:"2px solid black"}}>
           <h1 className='text-info mb-4'>User information</h1>
           <p>Name : {state.name}</p>
           <p>Email : {state.email}</p>
          </div>
          <div className="col-8 part">
            <pre className='mt-2 text-secondary fs-6'>
              Welcome to our platform!{'\n'}
              {'\n'}
              Already have an account? Log in below.{'\n'}
              {'[Username/Email] \n'}
              {'[Password] \n'}
              {'[Log In Button] \n'}
              {'\n'}
              Don't have an account yet? Sign up here.{'\n'}
              {'[Full Name] \n'}
              {'[Email Address] \n'}
              {'[Username] \n'}
              {'[Password] \n'}
              {'[Confirm Password] \n'}
              {'[Sign Up Button] \n'}
              {'\n'}
              By signing up, you agree to our Terms of Service and Privacy Policy.{'\n'}
              {'\n'}
              Forgot your password? Click here to reset it.{'\n'}
              {'\n'}
              For assistance, contact support@example.com.{'\n'}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
