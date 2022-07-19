import React, {useEffect, useState} from 'react';
import "./ResponsiveList.css"
import Card from '../card/Card';

function ResponsiveMarketList({bestCoins, worstCoins, lastCoins, highestMarketCap}) {
    const [coinType, setCoinType] = useState('Best Performers');
    const [coinList, setCoinList] = useState(bestCoins);
    const [loading, setLoading] = useState(false);

    const handleCoinData = (coinType) => {
        coinType.preventDefault();
        let dataType = coinType.target.value;
        if(dataType === 'Best Performers') {
            setLoading(true);
            setCoinType("Best Performers");
            setCoinList(bestCoins);
            setLoading(false);
            
        }else if(dataType === 'Worst Performers') {
            setLoading(true);
            setCoinType("Worst Performers");
            setCoinList(worstCoins);
            setLoading(false);
        }else if(dataType === 'Last Coins') {
            setLoading(true);
            setCoinType("Last Coins");
            setCoinList(lastCoins);
            setLoading(false);
        }else if(dataType === 'Highest MarketCap') {
            setLoading(true);
            setCoinType("Highest MarketCap");
            setCoinList(highestMarketCap);
            setLoading(false);
        }
    }


    useEffect(() => {
        setLoading(true);
        setCoinList(bestCoins);
        setLoading(false);
    }, [bestCoins]);
  return (
    <div className='responsiveList'>
       <div className='responsiveList__btn__container'>
            {["Best Performers", 'Worst Performers', "Last Coins", "Highest MarketCap"].map(type => {
                return <button className="responsiveList__btn" key={type} onClick={handleCoinData} value={type}>{type}</button>
            })}
       </div>

       <div className='responsiveList__cards'>
            {loading && <div className='responsiveList__loading'>Loading...</div>}
              {coinList && coinList.map(coin => (
                    <Card 
                        key={coin.uuid}
                        uuid={coin.uuid}
                        size= "small"
                        orientation= "vertical"
                        name={coin.name}
                        iconUrl={coin.iconUrl}
                        price={coin.price}
                        btcPrice={coin.btcPrice}
                        symbol={coin.symbol}
                        sparklines={coin.sparkline}
                        change={coin.change}
                        color={coin.color}
                    />
              )).slice(0,3)}
       </div>
    </div>
  )
}

export default ResponsiveMarketList