import React from 'react';
import '../footer/Footer.css';
import { assets } from '../../assets/assets';

function Footer() {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">

                    <img src={assets.logo} alt="logo" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque magni quae est beatae voluptas, nulla quos omnis fuga. Ad, tenetur?</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="facebook" />
                        <img src={assets.linkedin_icon} alt="linkedIn" />
                        <img src={assets.twitter_icon} alt="twitter" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-left">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+1-212-456-7890</li>
                        <li>contact@tomato.com</li>
                    </ul>
                </div>
            </div>
                <hr/>
                <p className="footer-copyright">Copyright 2024 tomato.com - All Right Reserved </p>
        </div>
    )
}

export default Footer