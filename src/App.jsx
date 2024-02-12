import React from 'react'
import Navbar from './components/Navbar/Navbar'
import ProductCard from './components/productCard/ProductCard'
import SingleProductDetails from './components/singleProductDetails/SingleProductDetails'

const App = () => {
  return (
    <>
      <Navbar />
      <ProductCard />
      <SingleProductDetails />
    </>


  )
}

export default App