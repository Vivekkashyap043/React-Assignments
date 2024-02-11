import React from 'react'
import './Home.css'
function Home() {
  return (
      <div className='container'>
          <div className='mt-5' style={{ display: "flex" }}>
              <div>
                  <img src="https://kaivalinfotech.com/wp-content/uploads/2021/06/web-development.jpg"
                      style={{ width: 300, height: 300, borderRadius: "50%" }} className='mt-5' alt="" />
              </div>
              <div className='mt-5 justify-content-center'>
                  <h1 className='ms-5 mt-5' style={{fontSize: 60, fontWeight: 700, paddingLeft:150}}>Learn to code</h1>
                  <h1 className='ms-5 mt-0' style={{fontSize: 40, color:'#d2b48c', fontWeight: 700}}>
                    With the world's largest web developer site.
                  </h1>
                  <div className='d-flex justify-content-center align-items-center'>
                    <input type="text" className="mt-4" name="" id="" placeholder='Search our tutorials, e.g. Html, CSS, Java'
                     style={{minHeight:"40px", minWidth:"400px", borderRadius:"55px", paddingLeft:30}}/>
                  </div>
                  
              </div>
          </div>
      </div>
  )
}

export default Home
