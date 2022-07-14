import React, {useState, useEffect} from 'react';
import "./CoinDetails.css";
import {Link} from 'react-router-dom'; 
import { getCoins, getSingleCoin } from '../../utils/getters';
import { FiArrowLeft } from 'react-icons/fi';
import CoinChart from '../charts/CoinChart';
import LoginCard from '../card/LoginCard';
import CoinCard from '../card/CoinCard';

function CoinDetails({coinName, uuid}) {
  const [coinDetails, setCoindetails] = useState({});
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    getSingleCoin(uuid).then(data => {
      setCoindetails(data);
    });
    getCoinsWithoutThisCoin();
    
  }, [uuid, coinDetails.price, coinDetails.change]);


  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     getSingleCoin(uuid).then(data => {
  //       if(data.price !== coinDetails.price) {
  //         setCoindetails(data);
  //       }
  //     }).catch(err => console.error(err));
  //   }, 25000);
    
  //   return () => clearInterval(interval);
   
  // }, [coinDetails.price, uuid]);

  //write a function to get the all the coins from getCoins api call in utils, then  filter the results and return the coins excluding the one that matches the uuid and the coinName
  const getCoinsWithoutThisCoin = () => {
    getCoins().then(data => {
      setCoins(data.filter(coin => coin.uuid !== uuid && coin.name !== coinName));
      console.log(coins)
    }).catch(err => console.error(err));
  }


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
              <div className='coindetails__content__topdiv-assets'>
                <h3>Explore more assets</h3>
                {coins && coins.map(coin => (
                  <CoinCard key={coin.uuid} coin={coin} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default CoinDetails