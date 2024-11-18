import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import '../navbar/Navbar.css';
import { Link } from 'react-router-dom';
import { StoreContext } from '../storecontext/StoreContext';

function Navbar({setShowLogin}) {

  const {totalCartAmount} = useContext(StoreContext);

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt='logo' className='logo' /></Link>

      <ul className="navbar-menu">

        <Link to='/'>Home</Link>
        <a href='#explore-menu'> Menu</a>
        <a href='#app-download'>Mobile-App</a>
        <a href='#footer'>Contact-Us</a>

      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt='search-icon' />

        <div className="search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="basket-icon" /></Link>
          <div className={totalCartAmount() === 0 ? "" : "dot"}></div>

        </div>

        <button onClick={() => setShowLogin(true)}>Sign In</button>

      </div>
    </div>
  )
}

export default Navbar;