import React, {useState, useEffect} from 'react';
import "./CoinDetails.css";
import {Link} from 'react-router-dom'; 
import { getCoins, getSingleCoin } from '../../utils/getters';
import { FiArrowLeft } from 'react-icons/fi';
import CoinChart from '../charts/CoinChart';
import LoginCard from '../card/LoginCard';
import CoinCard from '../card/CoinCard';
import Logo from '../../assets/nobgLogo.png';
import { Skeleton } from '@material-ui/lab';


function CoinDetails({coinName, uuid}) {
  const [coinDetails, setCoindetails] = useState({});
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    
    getSingleCoin(uuid).then(data => {
      setLoading(true)
      setCoindetails(data);
      setLoading(false)
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
    }).catch(err => console.error(err));
  }

  //Write a function to convert from unix time to a date and time using the 12 hour clock add either am or pm to the end of the time
  const convertUnixTime = (unixTime) => {
    const date = new Date(unixTime * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    const time = hours % 12 + ':' + minutes + ' ' + ampm;
    return time;
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

          <div className='coindetails__content__container'>
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
            

            <div className='coindetails__content__bottomdiv'>
              <div className='coindetails__content__bottomdiv-descp'>
               <div>
                  <img src={coinDetails.iconUrl} alt={coinDetails.name} className="coindetails__content__bottomdiv-descp-img" />
                  <h3>
                    {coinDetails.name}
                  </h3>
                  <span>{coinDetails.symbol}</span>

                  <img src={Logo} alt='logo' className="coindetails__content__bottomdiv-descp-logo" />
               </div>
                
                <p>{coinDetails.description?.replace(/<(.|\n)*?>/g, '')}</p>
              </div>

              <div className='coindetails__content__bottomdiv-stats'>
                <div>
                  <h3>Stats</h3>
                  <img src={Logo} alt='logo' className="coindetails__content__bottomdiv-descp-logo" />  
                </div>
                
                <div className='coindetails__content__bottomdiv-stats-item'>
                  <div>
                    <h4>Price  <span> [Today {convertUnixTime(coinDetails?.priceAt)}]</span> </h4>
                    <p>${coinDetails.price}</p>
                  </div>

                  <div>
                    <h4>Change</h4>
                    <p>{coinDetails.change}%</p> 
                  </div>

                  <div>
                    <h4>Market Cap</h4>
                    <p>{coinDetails.marketCap}</p>
                  </div>


                  <div>
                    <h4>Rank</h4>
                    <p>No. {coinDetails.rank}</p>
                  </div>

                  <div>
                    <h4>Number of Excahnges</h4>
                    <p>{coinDetails.numberOfExchanges}</p>
                  </div>

                  <div>
                    <h4>Number of Markets</h4>
                    <p>{coinDetails.numberOfMarkets}</p>
                  </div>

                  <div>
                    <h4>Website</h4>
                    <a href={coinDetails.websiteUrl} target='_blank' rel='noreferrer'>{coinDetails.websiteUrl}</a>
                  </div>
                  

                </div>
              </div>

                

            </div>


          </div>

   
        </div>
      </div>
        
    </div>
  )
}

export default CoinDetails