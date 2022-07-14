import React, {useState, useEffect} from 'react';
import "./CoinDetails.css";

function CoinDetails({coinName}) {
  return (
    <div>
        <h1>{coinName}</h1>
    </div>
  )
}

export default CoinDetails