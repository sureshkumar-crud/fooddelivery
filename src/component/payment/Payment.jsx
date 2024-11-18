import React, { useContext } from 'react'
import '../payment/Payment.css';
import { StoreContext } from '../storecontext/StoreContext';
import { useLocation } from 'react-router-dom';

function Payment() {

    const { totalCartAmount } = useContext(StoreContext);

    const { state } = useLocation();
    const userData = state?.uesrData;

    if(!userData){
      return <div>Loading...</div>
    }

  return (
    <div>
         <div className="place-order-right">
        <div className="cart-total">
          <div className='payment-infor'>
              <h3>Payment Information</h3>
              <p>First Name :{userData.fname}</p>
              <p>Last Name :{userData.lname}</p>
              <p>Email :{userData.email}</p>
              <p>Street :{userData.street}</p>
              <p>City :{userData.city}</p>
              <p>State :{userData.state}</p>
              <p>Zipcode :{userData.zipcode}</p>
              <p>Country :{userData.country}</p>
              <p>Phone No :{userData.phone}</p>
          </div>
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

          <button>PROCEED TO PAYMENT </button>

        </div>
      </div>
    </div>
  )
}

export default Payment