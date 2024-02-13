import React from 'react'
import { useSelector } from 'react-redux'

const CartProduct = () => {

    // UseSelector
    const selector = useSelector(state => state.cartItems.cartItems)

    return (
        <>
            <div className='mt-10 p-20'>
                <h1 className='text-2xl font-bold'> Cart Items </h1>

                {selector.length > 0 ? selector.map((item) => {
                    return <div key={item.id} className="flex w-full mt-5 p-5 items-center cursor-pointer bg-base-200 shadow-xl">
                        <div>
                            <figure><img src={item.image} className='w-[100px]' alt="Shoes" /></figure>
                        </div>

                        <div className="card-body">
                            <h2 className="card-title"> {item.title.slice(0, 20)}... </h2>
                            <h4> {item.price} </h4>
                            <p> {item.description.slice(0, 50)}... </p>
                        </div>

                        <div>
                            <button> Delete </button>
                        </div>

                    </div >
                }) : <h1>Nhi hey</h1>}
            </div>

        </>
    )
}

export default CartProduct