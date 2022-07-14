import React, {useState, useEffect} from 'react'
import { getCoins } from '../../utils/getters';

function MarketTable() {
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        getCoins().then(data => {
            setFilteredData(data);
        }).catch(err => console.error(err));
    }, []);

    const handleCoinData = (e) => {
        e.preventDefault();
        let dataType = e.target.value;
        dataType !== "All" ? setFilteredData(filteredData.filter(coin => coin.symbol === dataType)) : getCoins().then(data => { setFilteredData(data)}).catch(err => console.error(err));
    }

  return (
    <div>
        <div>
            {["All", 'crypto', 'fiat'].map(type => {
                return <button key={type} onClick={handleCoinData} value={type}>{type}</button>
            })}
        </div>

        {filteredData && filteredData.map(coin => (
            <div key={coin.uuid}>
                <p>{coin.name}</p>
                <p>{coin.symbol}</p>
                <p>{coin.price}</p>
                <p>{coin.change}</p>
                <p>{coin.marketCap}</p>
                <p>{coin.type}</p>
            </div>
        ))}
    </div>
  )
}

export default MarketTable