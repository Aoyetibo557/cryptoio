import React, {useState, useEffect} from 'react';
import Button from '../button/Button';
import './Table.css';

function Table() {

    const [data, setData] = useState([]);

    useEffect(() => {
        getCoins();
    }, []);



    const getCoins = async () => {

        const fetch = require('node-fetch');

        const url = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';

        const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e7dc8eac4dmsh92a9da89ed892e9p1991a2jsn19497b2325c0',
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
                <thead>
                    <th>Assets</th>
                    <th>Price</th>
                    <th>24h change</th>
                </thead>
                <tbody>
                    {data.map(coin => (
                        <tr key={coin.uuid}>
                            <td>
                                <img className='table__image' src={coin.iconUrl} alt={coin.name} />
                                {coin.name}
                            </td>
                            <td>{coin.price}</td>
                            <td>{coin.change}%</td>
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
                </tbody>
            </table>

            
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
