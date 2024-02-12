import React from 'react'

const ProductCard = (props) => {
  return (
    <>
      <div className="card w-80 bg-base-100 shadow-xl">
        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title"> {props.title} JKJHGJH </h2>
          <h4> {props.price} </h4>
          <p> {props.description} </p>
          <div className="card-actions justify-end">
          <button className="btn btn-primary"> Add to Cart </button>

          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard