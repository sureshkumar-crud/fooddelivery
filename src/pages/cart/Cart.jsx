import React, { useContext } from 'react';
import '../cart/Cart.css';
import { StoreContext } from '../../component/storecontext/StoreContext';
import { useNavigate } from 'react-router-dom';

function Cart() {

  const { cartItems, food_list, removeCart, totalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();


  const handleCheckOut = () =>{
    if(totalCartAmount() > 0){
       navigate('/placeorder')
    }
    else{
      alert('Your cart is empty! Please add items to your cart.');
    }
  }

  return (

    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {

          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div key={item._id} className=" cart-items-title cart-items-list">
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeCart(item._id)} className='cross'>X</p>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${totalCartAmount()}</p>
            </div>

            <hr />

            <div className="cart-total-details">
              <p>Delivery Charge</p>
              <p>${totalCartAmount() === 0 ? 0 : 2}</p>
            </div>

            <hr />

            <div className="cart-total-details">
              <b>Total</b>
              <b>${totalCartAmount() === 0 ? 0 : totalCartAmount() + 2}</b>
            </div>
          </div>

          <button onClick={handleCheckOut}>PROCEED TO CHECKOUT</button>

        </div>
      </div>
    </div>
  );
}

export default Cart;
