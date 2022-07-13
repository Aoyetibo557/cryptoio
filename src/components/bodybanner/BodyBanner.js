import React from 'react';
import './BodyBanner.css';
import RealiabilityImage from '../../assets/reliability.png';
import SecurityImage from '../../assets/security.png';
import TradingImage from "../../assets/trade.png";
import MobileAppImage from "../../assets/mobileapp.svg"
import Button from '../button/Button';
import GooglePlay from '../../assets/googleplay.png';
import AppleStore from '../../assets/applestore.svg';
import ClipBoardImage from '../../assets/clipboard.png';
import AltTradingImage from '../../assets/trading.png';
import FundImage from '../../assets/fund.png';

function BodyBanner() {
  return (
    <div className='bodybanner'>
        <div className='bodybanner__content'>
            <div className='bodybanner__content__top'>
                <div>
                    <img className='bodybanner__content__image' src={RealiabilityImage} alt='logo' />
                    <h3>Proven Realiability</h3>
                    <ul>
                        <li>Industry-leading uptime</li>
                        <li>High-speed network</li>
                        <li>24/7 dedicated support</li>
                    </ul>
                </div>

                <div>
                    <img className='bodybanner__content__image' src={SecurityImage} alt='logo' />
                    <h3>Proven Security</h3>
                    <ul>
                        <li>High-level security</li>
                        <li>High-level encryption</li>
                        <li>High-level authentication</li>
                    </ul>
                </div>

                <div>
                    <img className='bodybanner__content__image' src={TradingImage} alt='logo' />
                    <h3>Ease of Trading</h3>
                    <ul>
                        <li>Instant deposit options</li>
                        <li>Instant withdrawal options</li>
                        <li>Easy transfer options</li>
                    </ul>

                </div>

            </div>
            <div className='bodybanner__content__bottom'>
                <div className='bodybanner__content__bottom__left'>
                    <h3>Unlimited access with our mobile app.</h3>
                    <span className='line'></span>
                    <h5>Advanced tools packed in an intuitive interface</h5>
                    <p>
                        Stay connected with the latest news, updates, and insights from the world’s leading financial services.
                        Download the app today and get access to the most advanced features of the platform. 
                        Our mobile app is available on both iOS and Android.

                    </p>
                    <div className='bodybanner__content__bottom-div'>
                            
                        <Button 
                            text='learn more'
                            url='/onboarding/login'
                            label={'Learn more'}
                            color="secondary"
                        />

                        <img className='app__link' src={GooglePlay} alt="Google Play" />
                        <img className='app__link' src={AppleStore} alt="App Store" />
                    </div>
                </div>
                <div className='bodybanner__content__bottom__right'>
                    <img className='bodybanner__content__bottom__image' src={MobileAppImage} alt='logo' />
                </div>
            </div>


            <div className='bodybanner__steps'>
                <h2>3 Steps to start trading & earning</h2>
                <div className='bodybanner__steps__content'>
                    <div className='bodybanner__steps__content__step'>
                        <img className='bodybanner__content__image-white' src={ClipBoardImage} alt="step 1" />
                        <h3>1. Register</h3>
                        <p>
                            Choose the right account tyoe and verify your identify.
                        </p>
                    </div>

                    <div className='bodybanner__steps__content__step'>
                        <img className='bodybanner__content__image-white' src={FundImage} alt="" />
                        <h3>2. Fund</h3>
                        <p>
                            Use your debit or credit card or a range of global banking methods to deposit funds to your account.
                        </p>
                    </div>

                    <div className='bodybanner__steps__content__step'>
                        <img className='bodybanner__content__image-white' src={AltTradingImage} alt="" />
                        <h3>3. Trade</h3>
                        <p>
                            Buy, sell and transfer leading cryptocurrencies. 
                        </p>
                    </div>
                </div>

                <Button 
                    label={'Get started'}
                    url='/onboarding/login'
                    color="primary"
                />
            </div>
        </div>
    </div>
  )
}

export default BodyBanner