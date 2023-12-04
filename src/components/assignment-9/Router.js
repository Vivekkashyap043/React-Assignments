import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import RootComponent from './RootComponent';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Technology from './Technology';
import Reactjs from './Reactjs';
import Angular from './Angular';
import Vue from './Vue';

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
                    path:"technology",
                    element:<Technology />,
                    children:[
                        {
                            path: "reactjs",
                            element:<Reactjs />
                        },
                        {
                            path:"angular",
                            element:<Angular />
                        },
                        {
                            path:"vue",
                            element:<Vue />
                        }
                    ]
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
