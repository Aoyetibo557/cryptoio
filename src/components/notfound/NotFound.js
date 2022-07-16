import React from 'react';
import './NotFound.css';
import Header from '../header/Header'

function NotFound() {
  return (
    <div>
        <Header />
        <div>
            <h2>Oops</h2>
            <h4>Something Went Wrong</h4>
            <p>Error 404 Page Not Found</p>
            
        </div>
    </div>
  )
}

export default NotFound