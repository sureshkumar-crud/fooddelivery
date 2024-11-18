import React, { useState } from 'react'
import Navbar from './component/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import PlaceOrder from './pages/placeorder/PlaceOrder'
import Footer from './component/footer/Footer'
import LoginPopup from './component/loginpopup/LoginPopup'
import Payment from './component/payment/Payment'

function App() {

  const [showLogin , setShowLogin] = useState(false);

  return (
    <>
    {showLogin ? <LoginPopup setShowLogin={setShowLogin}/> : <></>}

      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/placeorder' element={<PlaceOrder />} />
          <Route path='/payment' element={<Payment/>}/>
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App