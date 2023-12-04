import React from 'react'
import NavigationBar from './Navigationbar'
import Footer from './Footer'
import {Outlet} from 'react-router-dom'
function RootComponent() {
  return (
    <div>
      <NavigationBar/>
      <div style={{minHeight: "83vh"}}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default RootComponent
