import React, {useState, useEffect} from 'react';
import Button from '../button/Button';
import BasicSparklines from '../sparklines/BasicSparklines';
import './Table.css';
import {Link} from 'react-router-dom';


const API_KEY = `${process.env.REACT_APP_RAPIDAPI_KEY}`;

function Table() {

    const [data, setData] = useState([]);

    useEffect(() => {
        getCoins();
        console.log(API_KEY);
    }, []);

    const convertPrice = (price) => {
        return Number.parseFloat(price).toFixed(2);
    }

    const getCoins = async () => {

        const fetch = require('node-fetch');

        const url = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';

        const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
        };

        fetch(url, options)
            .then(res => res.json())
            .then(json => {
                console.log(json.data.coins)
                setData(json.data.coins)
            })
            .catch(err => console.error('error:' + err));
    }
  return (
    <div className='table'>
       <div className='table__content'>
            <table className='table__board'>
                <tr>
                    <th>Assets</th>
                    <th>Price</th>
                    <th>24h change</th>
                </tr>
                {data.map(coin => (
                    <tr key={coin.uuid}>
                        <td className='coin__td'>
                            <span >
                                <img className='table__image' src={coin.iconUrl} alt={coin.name} />
                            </span>

                            <span className='coin__td-name'>{coin.name}</span>

                            <span className='coin__td-symbol'>{coin.symbol}</span>
                        </td>
                        <td>${convertPrice(coin?.price)}</td>
                        <td className={coin.change >= 0.0 ? 'coin__td-change-positive' : "coin__td-change-negative" }>{coin.change}%</td>
                        <td className='coin__td-spark'> 
                            <BasicSparklines 
                                data={coin.sparkline}
                                limit={0}
                                width={100}
                                height={30}
                                margin={0}
                                color={coin.color}
                            />
                        </td>
                        
                        <td>
                            <Button 
                                text='Buy'
                                url="/"
                                label='Buy'
                                color="secondary"
                            />
                        </td>
                    </tr>
                )).slice(0, 7)}
            </table>
            <div className='table__link__container'>
                <Link to='/markets'>Explore all other available assets &rarr;</Link>
            </div>


            
       </div>
    </div>
  )
}

export default Table




    // const getCoins = async () => {
    //     const response = await fetch('https://api.coingecko.com/api/v3/coins/list');
    //     const data = await response.json();
    //     console.log(data);
    //     setData(data);
    // }
