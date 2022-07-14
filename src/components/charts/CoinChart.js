import React, { useState, useEffect } from 'react';
import "./CoinChart.css";
import BasicSparklines from "../sparklines/BasicSparklines";



function CoinChart({coin}) {
    
  return (
    <div className="coinchart" >
        <div className='coinchart__top'>
            <h3>${Number.parseFloat(coin?.price)} </h3>
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