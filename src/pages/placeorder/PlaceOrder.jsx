import React, { useState } from 'react'
import '../placeorder/PlaceOrder.css';
import { useNavigate } from 'react-router-dom';

function PlaceOrder() {

  const navigate = useNavigate();

  const formdata = {
    fname: '',
    lname: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: ''
  }

  const [userData, setUserData] = useState(formdata);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate('/payment',{ state :{userData} })

    console.log("userDetails", userData)
  }


  return (
    <div className='place-order'>
      <div className="place-order-left">
        <h3 className="title">Delivery Information</h3>
        <form action="#" onSubmit={handleSubmit}>

          <div className="multi-fields">

            <input
              type="text"
              placeholder='Enter Your First Name'
              name='fname'
              value={userData.fname}
              onChange={handleChange}
            />

            <input
              type="text"
              placeholder='Enter Your Last Name'
              name='lname'
              value={userData.lname}
              onChange={handleChange}
            />

          </div>

          <input
            type="email"
            placeholder='Enter Your Email'
            name='email'
            value={userData.email}
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder='Enter Your Street'
            name='street'
            value={userData.street}
            onChange={handleChange}
          />

          <div className="multi-fields">

            <input
              type="text"
              placeholder='Enter Your First City'
              name='city'
              value={userData.city}
              onChange={handleChange}
            />

            <input
              type="text"
              placeholder='Enter Your Last State'
              name='state'
              value={userData.state}
              onChange={handleChange}
            />

          </div>

          <div className="multi-fields">
            <input
              type="number"
              placeholder='Enter Your First Zipcode'
              name='zipcode'
              value={userData.zipcode}
              onChange={handleChange}
            />

            <input
              type="text"
              placeholder='Enter Your Last Country'
              name='country'
              value={userData.country}
              onChange={handleChange}
            />
          </div>

          <input
            type="number"
            placeholder='Enter Your Phone Number'
            name='phone'
            value={userData.phone}
            onChange={handleChange}
          />

          <button type='submit'>User Details</button>

        </form>
      </div>

    </div>
  )
}

export default PlaceOrder