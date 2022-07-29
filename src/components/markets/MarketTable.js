import React, {useState, useEffect} from 'react'
import { getCoins } from '../../utils/getters';
import BasicAlert from '../basicalert/BasicAlert';
import BasicTable from '../basictable/BasicTable';
import CoinCard from '../card/CoinCard';


function MarketTable() {
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getCoins().then(data => {
            setLoading(true)
            setFilteredData(data);
            setLoading(false)
        }).catch(err => console.error(err));
    }, []);

    const handleCoinData = (e) => {
        e.preventDefault();
        let dataType = e.target.value;
        dataType !== "All" ? setFilteredData(filteredData.filter(coin => coin.symbol === dataType)) : getCoins().then(data => { setFilteredData(data)}).catch(err => console.error(err));
    }

  return (
    <div className='markettable'>
        <div className='markettable__filter-btns'>
            {["All", 'crypto', "Gaming", "NFT", 'fiat'].map(type => {
                return <button className='filter__btn' key={type} onClick={handleCoinData} value={type}>{type}</button>
            })}
        </div>



        <div className='markettable__content'>
            <div className='markettable__content__topdiv'>
                {filteredData && filteredData.map(coin => (
                    <BasicTable key={coin.uuid} 
                        uuid={coin.uuid}
                        name={coin.name}
                        iconUrl={coin.iconUrl}
                        symbol={coin.symbol}
                        marketCap={coin.marketCap}
                        price={coin.price}
                        change={coin.change}
                    />
                ))}
            </div>

            <div className="markettable__content__responsive" >
                {loading && <div>Loading...</div>}
                {filteredData.length <= 0 &&
                    <div>
                        <h4>No results found!</h4> 
                        <BasicAlert message="No data found" type="info" /> 
                    </div>
                }
                {filteredData && filteredData.map(coin => (
                    <CoinCard key={coin.uuid} 
                       coin={coin}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default MarketTable