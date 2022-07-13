import React from 'react';
import './Footer.css';
import {Link } from "react-router-dom";
import FooterLogo from '../../assets/nobgLogo.png';

function Footer() {
  return (
    <div className='footer'>
        <div className='footer__content'>
            <div className='footer__content-left'>
                <div>
                    <h4>About</h4>
                    <Link className='footer__link' to="/">Who We Are</Link>
                    <Link className='footer__link' to="/">careers</Link>
                    <Link className='footer__link' to="/">Legal & Privacy</Link>
                    <Link className='footer__link' to="/">FAQ</Link>
                </div>

                <div>
                    <h4>Products</h4>
                    <Link className='footer__link' to="/">Mobile App</Link>
                    <Link className='footer__link' to="/">Tradeview</Link>
                    <Link className='footer__link' to="/">Cryptoio Rewards</Link>
                </div>

                <div>
                    <h4>Services</h4>
                    <Link className='footer__link' to="/">Pro Traders</Link>
                    <Link className='footer__link' to="/">Crypto-as-a-Service</Link>
                    <Link className='footer__link' to="/">Institution & Partners</Link>
                </div>

                <div>
                    <h4>Contacts</h4>
                    <a className='footer__link' href="mailto:info@cryptoio.net">info@cryptoio.net</a>
                    <a className='footer__link' href="mailto:support@cryptoio.net">support@cryptoio.net</a>
                    <a className='footer__link' href="mailto:complaints@cryptoio.net">complaints@cryptoio.net</a>
                    <a className='footer__link' href="mailto:press@cryptoio.net">press@cryptoio.net</a>
                    <a className='footer__link' href="tel:2133209190"> +1 213 320 9190</a>
                    <a className='footer__link' href="tel:8002343472">+1 800 234 3472</a>

                </div>
            </div>
            <div className='footer__content-right'>
                <div>
                    <img src={FooterLogo} alt=""/>
                </div>
            </div>
        </div>
        <p>All Rights reserved. &copy; 2022. Developed by O.A.G_Studios</p>
    </div>
  )
}

export default Footer