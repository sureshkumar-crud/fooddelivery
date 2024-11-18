import React, { useState } from 'react'
import '../loginpopup/LoginPopup.css';
import { assets } from '../../assets/assets';

function LoginPopup({ setShowLogin }) {

    const [title, setTitle] = useState('Sign Up');

    const handleSubmit =(e) =>{
      e.preventDefault();

      if(title === 'Sign Up'){
        alert("Account Created Successfully")
      }
      else{
        alert("Login Successfully")
      }
    }

    return (
        <div className='login-popup'>

            <form action="#" className="login-popup-container" onSubmit={handleSubmit}>
                <div className="login-popup-title">

                    <h2>{title}</h2>
                    <img onClick={() => setShowLogin()} src={assets.cross_icon} alt="cross-icon" />

                </div>

                <div className="login-popup-inputs">

                    {title === 'Login' ? <></> : <input type='text' placeholder='Enter Your Name' required />}
                    <input type='email' placeholder='Enter Your Email' required />
                    <input type='password' placeholder='Enter Your Password' required />

                </div>

                <button type='submit'>{title === 'Sign Up' ? 'Create Account' : 'Login'}</button>

                <div className="login-popup-condition">

                    <input type="checkbox" required />
                    <p>By continuing, i agree to the terms of use & privacy policy.</p>

                </div>

                {title === 'Login'
                    ? <p>Create a new account? <span onClick={() => setTitle('Sign Up')}>Click here</span></p>
                    : <p>Already have an account? <span onClick={() => setTitle('Login')}>Login here</span></p>
                }
            </form>
        </div>
    )
}

export default LoginPopup