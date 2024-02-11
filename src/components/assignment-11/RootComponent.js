import React from 'react'
import NavigationBar from './Navigationbar'
import Footer from './Footer'
import {Outlet} from 'react-router-dom'
function RootComponent() {
  return (
    <div>
      <NavigationBar/>
      <div style={{minHeight: "76vh"}}>
        <Outlet />
      </div>
      <div style={{position:'fixed',  minWidth: "100%"}}>
      <Footer />
      </div>
      
    </div>
  )
}

export default RootComponent
