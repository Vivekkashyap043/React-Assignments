import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import RootComponent from './RootComponent';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Dashboard from './Dashboard';

function Router() {

    let router = createBrowserRouter([
        {
            path: "",
            element:<RootComponent/>,
            children:[
                {
                    path:"",
                    element:<Home />
                },
                {
                    path:"register",
                    element:<Register />
                },
                {
                    path:"login",
                    element:<Login />
                },
                {
                    path:'dashboard',
                    element:<Dashboard />
                }
            ]
        }
    ]);

  return (
    <div>
        <RouterProvider  router={router}/>
    </div>
  )
}

export default Router
