import React, {useState, useEffect} from 'react';
import "./CoinDetails.css";
import {Link} from 'react-router-dom'; 
import { getSingleCoin } from '../../utils/getters';
import { FiArrowLeft } from 'react-icons/fi';
import CoinChart from '../charts/CoinChart';
import LoginCard from '../card/LoginCard';

function CoinDetails({coinName, uuid}) {
  const [coinDetails, setCoindetails] = useState({});

  useEffect(() => {
    getSingleCoin(uuid).then(data => {
      setCoindetails(data);
    })
  }, [uuid]);
  useEffect(() => {
    const interval = setInterval(() => {
      getSingleCoin(uuid).then(data => {
        if(data.price !== coinDetails.price) {
          setCoindetails(data);
        }
      }).catch(err => console.error(err));
    }, 25000);
    
    return () => clearInterval(interval);
   
  }, [coinDetails.price, uuid]);

  return (
    <div className='coindetails'>
      <div className='coindetails__container'>
        <Link className='coindetails__link' to='/markets'> 
          <FiArrowLeft className='coindetails__link-icon' />
          Back to Markets
        </Link>
        <div className='coindetails__content'>
          <div className='coindetails__content__coinname'>
            <img className='coindetails__image' src={coinDetails.iconUrl} alt={coinDetails.name} />
            <p>{coinDetails.name} <span>{coinDetails.symbol}</span></p>
          </div>

          <div className='coindetails__content__topdiv'>
            <CoinChart coin={coinDetails} />

            <div>
              <LoginCard coinSymbol={coinDetails.symbol} />
            </div>
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default CoinDetails