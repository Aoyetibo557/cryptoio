import React, {useState, useEffect} from 'react';
import Button from '../button/Button';
import BasicSparklines from '../sparklines/BasicSparklines';
import './Table.css';
import {Link} from 'react-router-dom';
import {getCoins} from '../../utils/getters';

function Table() {

    const [data, setData] = useState([]);

    useEffect(() => {
        getCoins().then(data => {
            setData(data);
        }).catch(err => console.error(err));
    }, []);

   
    const convertPrice = (price) => {
        return Number.parseFloat(price).toFixed(2);
    }



  return (
    <div className='table'>
       <div className='table__content'>
            <table className='table__board'>
               <thead>
                    <tr>
                        <th>Assets</th>
                        <th>Price</th>
                        <th>24h change</th>
                    </tr>
               </thead>
                <tbody>
                    {data?.map(coin => (
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
                </tbody>
            </table>
            <div className='table__link__container'>
                <Link to='/markets'>Explore all other available assets &rarr;</Link>
            </div>
       </div>
    </div>
  )
}

export default Table
