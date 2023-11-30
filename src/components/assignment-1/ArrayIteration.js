import React from 'react'
import "./ArrayIteration.css"
import image from '../../images/images.jpeg';
function ArrayIteration() {
    let name = ["vivek","ram","vikky","pinky","raghu"];
  return (
    <div>
      <div className="container-fluid">
        <h1 className='text-center bg-primary m-2 '>React js Assignment - 1</h1>
        <div className="row mt-3">
          <div className="col">
            <h1 className="text-center fs-1 bg-success">Iterating array</h1>
            {
              name.map(ele =>
                <h2 className='text-center fs-4'>{ele}</h2>)
            }
          </div>
          <div className="col">
            <h2 className='text-center bg-danger'>image from link</h2>
            <img className='image-size mx-auto d-block' 
            src="https://mymodernmet.com/wp/wp-content/uploads/2017/11/best-photos-2017-matt-burgess.jpg" alt="" />
          </div>
          <div className="col">
            <h2 className='text-center bg-warning'>downloaded image</h2>
            <img className='image-size mx-auto d-block'  src={image} alt="" />
          </div>
          </div>
        </div>
      </div>
  )
}

export default ArrayIteration
