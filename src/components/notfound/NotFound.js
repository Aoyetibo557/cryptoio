import React from 'react';
import './NotFound.css';
import NotFoundImage from '../../assets/404.svg';
import Header from '../header/Header'
import Footer from '../footer/Footer';
import Button from '../button/Button';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className='notfound'>
        <Header />
        <div className='notfound__content'>
          <img src={NotFoundImage} alt="404 - Not Found" className='notfound__image'/>
          <div className='notfound__right'>
            <h5>Page not found</h5>
            <h2>Oh No! Error 404</h2>
            <h4>It seems this page has been abducted by aliens. <br />Come back to the homepage while we try and rescue it</h4>
            
            <div>
              <Button color="primary" label='Back to Homepage' />
              <Link to="/" className='notfound__link'>Visit our help center</Link>
            </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default NotFound