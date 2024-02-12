import React from 'react'

const ProductCard = (props) => {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title"> {props.title} JKJHGJH </h2>
          <h4> {props.price} </h4>
          <p> {props.description} </p>
          <div className="card-actions justify-end">
            <a href='#' className='flex items-center gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              Add to Cart
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard