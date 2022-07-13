import React from 'react';
import "./Banner.css";
import BannerImage from "../../assets/bannerimage.svg";
import Button from '../button/Button';

function Banner() {
  return (
    <div className='banner'>
        <div className='banner__content'>
            <div className='banner__content__text'>
                <h2 className='banner__title'>
                    <span className='banner__title-first'>Buy, Sell & Trade on the </span><br />
                    <span className='banner__title-second'>Original Crypto Exchange</span>
                </h2>
                <h4 className='banner__subtitle'>
                    Cryptoio is a decentralized exchange that allows you to <span><strong>buy, sell and trade</strong></span> digital assets. 
                    With Cryptoio, you can buy and sell digital assets like Bitcoin, Ethereum, Litecoin, and more.
                    We Provide 24/7 support for our users. <span> <strong>Since 2018</strong> </span>.
                </h4>

               <Button 
                url='/onboarding/login'
                label='Get Started'
                color='primary'
               />
            </div>
            <div >
                <img className='banner__content__image' src={BannerImage} alt='Cryptoio' />
            </div>
        </div>
    </div>
  )
}

export default Banner