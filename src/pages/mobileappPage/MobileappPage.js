import React from 'react';
import './MobileappPage.css';
import FinancialDataImge from '../../assets/financialdata.svg';
import GooglePlayImage from "../../assets/googleplay.png";
import AppStoreImage from "../../assets/applestore.svg";
import Interface from '../../assets/interface.svg';
import SecureImage from "../../assets/securetransfers.svg";
import ExchangeImage from "../../assets/exchange.svg";
import Header from '../../components/header/Header'
import { Link } from 'react-router-dom';





function MobileappPage() {
  return (
    <div className='mobileappPage'>
        <Header />
        <div className='mobileappPage__content'>
            <div className='mobileappPage__top'>
                <div className='mobileappPage__top-left'>
                    <h3>Get access to cyrpto on the go with the Cryptoio app </h3>
                    <p>The full trading functionality of Cryptoio at your fingertips whenever the action hits.</p>

                   <div>
                        <Link to="/mobile-app/downloads">
                            <img src={GooglePlayImage} alt="google play" className='mobileappPage__smallimage'/>
                        </Link>
                        <Link to="/mobile-app/downloads">
                            <img src={AppStoreImage} alt="app store" className='mobileappPage__smallimage'/>
                        </Link>
                   </div>
                </div>
                <div className='mobileappPage__top-right'>
                    <img src={FinancialDataImge} alt="finalcial data" className='mobileappPage__top-image'/>
                </div>
            </div>

            <section className='mobileappPage__section'>
                <div className='mobileappPage__topbody'>
                    <div className='mobileappPage__topbody__box'>
                        <div>
                            <h3>Intuitive interface</h3>
                            <hr />
                            <p>
                                Cryptoio is a mobile app that allows you to trade cryptocurrencies with the full range of features.
                            </p>
                        </div>

                        <img src={Interface} alt="finalcial data" className='mobileappPage__smallimage'/>
                    </div>

                    <div className='mobileappPage__topbody__box'>
                        <img src={ExchangeImage} alt="finalcial data" className='mobileappPage__smallimage'/>

                        <div>
                            <h3> Pocket-sized exchange</h3>
                            <hr />
                            <p>
                                Four order types, real-time charts & order book and a range of analytical tools. Choose between simple buy & sell or advanced Tradeview interface.
                            </p>
                        </div>

                    </div>

                    <div className='mobileappPage__topbody__box'>
                        <div>
                            <h3>Secure crypto transferse</h3>
                            <hr />
                            <p>
                                Send and receive crypto straight from your Bitstamp account. Get the convenience of a mobile wallet combined with the security of our advanced crypto storage system.
                            </p>
                        </div>

                        <img src={SecureImage} alt="finalcial data" className='mobileappPage__smallimage'/>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default MobileappPage