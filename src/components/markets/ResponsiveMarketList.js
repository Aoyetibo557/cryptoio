import React, {useEffect, useState} from 'react';
import "./ResponsiveList.css"
import Card from '../card/Card';

function ResponsiveMarketList({bestCoins, worstCoins, lastCoins, highestMarketCap}) {
    const [coinType, setCoinType] = useState('Best Performers');
    const [coinList, setCoinList] = useState(bestCoins);


    const handleCoinData = (coinType) => {
        coinType.preventDefault();
        let dataType = coinType.target.value;
        if(dataType === 'Best Performers') {
            setCoinType("Best Performers");
            setCoinList(bestCoins);
        }else if(dataType === 'Worst Performers') {
            setCoinType("Worst Performers");
            setCoinList(worstCoins);
        }else if(dataType === 'Last Coins') {
            setCoinType("Last Coins");
            setCoinList(lastCoins);
        }else if(dataType === 'Highest MarketCap') {
            setCoinType("Highest MarketCap");
            setCoinList(highestMarketCap);
        }
    }


    useEffect(() => {
        setCoinList(bestCoins);
    }, [bestCoins]);
  return (
    <div className='responsiveList'>
       <div className='responsiveList__btn__container'>
            {["Best Performers", 'Worst Performers', "Last Coins", "Highest MarketCap"].map(type => {
                return <button className="responsiveList__btn" key={type} onClick={handleCoinData} value={type}>{type}</button>
            })}
       </div>

       <div className='responsiveList__cards'>
              {coinList && coinList.map(coin => (
                    <Card 
                        key={coin.uuid}
                        uuid={coin.uuid}
                        size='small'
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