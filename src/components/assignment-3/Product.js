import React from 'react'

function Product(props) {
  return (
    <div>
      <div className="card" >
        <img className="card-img-top" src={props.productData.image} alt="product" />
        <div className="card-body">
          <h5 className="card-title">{props.productData.title}</h5>
          <p className="card-text">{props.productData.category}</p>
          <p className="card-text">₹{props.productData.price}/-</p>
          <p className="card-text">Rating : {props.productData.rating.rate}</p>
        </div>
      </div>
    </div>
  )
}

export default Product
