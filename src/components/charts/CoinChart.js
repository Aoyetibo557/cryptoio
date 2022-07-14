import React, { useState, useEffect } from 'react';
import "./CoinChart.css";
import BasicSparklines from "../sparklines/BasicSparklines";



function CoinChart({coin}) {
    
  return (
    <div className="coinchart" >
        <div className='coinchart__top'>
          {/* if the price is over 10000 add a comma */}
            <h3>${coin.price > 10000 ? Number.parseFloat(coin.price).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") : Number.parseFloat(coin.price).toFixed(2)} </h3>
            {/* <h3>${Number.parseFloat(coin?.price).toFixed(2)} </h3> */}
            <p>
                <span> {coin?.change >= 0 ? `+${coin?.change}%` : `${coin?.change}%`} </span>
                <span>Today</span>
            </p>
        </div>
        <BasicSparklines limit={25} height={150} data={coin.sparkline} color={coin.color} />
    </div>
  )
}

export default CoinChart