import React, {useEffect, useState} from 'react'
import Navbar from './components/navigator/navbar'
import Products from './components/products/products'
import Checkout from './components/Checkoutform/Checkout/Checkout'
import {commerce} from './lib/commerce'
import Cart from './components/Cart/Cart'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  const [cart, setCart] = useState({});
  const [products, setProducts] = useState([]);
 

  const fecthProducts = async () => {
    const { data } = await commerce.products.list()

    setProducts(data)
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity)
    setCart(item)
  }

  const handleUpdateCartQty = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, {quantity})

    setCart(response)
  }

  const handleRemoveFromCart = async (productId) => {
     const response = await commerce.cart.remove(productId)

     setCart(response)
  }

  const handleEmptyCart = async() => {
    const response = await commerce.cart.empty()

    setCart(response)
  }


  useEffect(() => {
    fecthProducts()
    fetchCart()
  }, [])

  console.log(products)

  console.log(cart)

  return (
    <Router>
        <Navbar totalItems = {cart.total_items}/>
        <Routes>
          <Route path='/' element ={<Products products = { products }  onAddToCart = { handleAddToCart }/>}/>
          <Route path= '/cart' element = {<Cart cart = {cart} 
          handleUpdateCart = {handleUpdateCartQty}
          handleRemoveFromCart = {handleRemoveFromCart}
          handleEmptyCart = {handleEmptyCart}/>}
          />
          <Route path='/checkout' element = {<Checkout cart = {cart}/>} />
        </Routes>
    </Router>
  )
}

export default App