import React, {useState, useEffect} from 'react';
import "./MarketComp.css";
import { getCoins, getBestCoin, getWorstCoin, getLastCoin, getHighestMarketCap } from '../../utils/getters';
import Card from '../card/Card';
import ResponsiveMarketList from './ResponsiveMarketList';

function MarketComp() {
    const [data, setData] = useState([]);
    const [bestCoins, setBestCoins] = useState([]);
    const [worstCoins, setWorstCoins] = useState([]);
    const [lastCoins, setLastCoins] = useState([]);
    const [highestMarketCap, setHighestMarketCap] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        getCoins().then(data => {
            setWorstCoins(getWorstCoin(data));
        }).catch(err => console.error(err))
        
        getCoins().then(data => {
            setBestCoins(getBestCoin(data));
        }).catch(err => console.error(err))

        getCoins().then(data => {
            setLastCoins(getLastCoin(data));
        }).catch(err => console.error(err))

        getCoins().then(data => {
            setHighestMarketCap(getHighestMarketCap(data));
        }).catch(err => console.error(err))
    }, [data]);

   

  

  return (
    <div className='marketcomp'>
        <div className='marketcomp-div'>
            <p className='marketcomp__div__p '>Best performing assets </p>
            <div className='card__container'>
                {bestCoins.map(coin => (
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

        <div className='marketcomp-div'>
            <p className='marketcomp__div__p '>Worst performing assets </p>
            <div className='card__container'>
                {worstCoins?.map(coin => (
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

        <div className='marketcomp-div'>
            <p className='marketcomp__div__p '>Last Listed </p>
            <div className='card__container'>
                {lastCoins?.map(coin => (
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

        <div className='marketcomp-div'>
            <p className='marketcomp__div__p '>Highest Marketcap </p>
            <div className='card__container'>
                {highestMarketCap?.map(coin => (
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

        <div className='responsiveList'>
            <ResponsiveMarketList bestCoins={bestCoins} highestMarketCap={highestMarketCap} worstCoins={worstCoins} lastCoins={lastCoins} />
        </div>
    </div>
  )
}

export default MarketComp