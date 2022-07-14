import React from 'react'
import { Link } from 'react-router-dom'

function CoinCard({coin}) {
  return (
    <div className='coinCard' >
        <div className='coinCard__left'>
            <img className='coinCard__image' src={coin.iconUrl} alt={coin.name} />
            <Link to={`/markets/${coin.name}/${coin.uuid}`} >
                <span>{coin.name}</span>
                <span className='coinCard__left-symbol'>{coin.symbol}</span>
            </Link>
        </div>
        <div className='coinCard__right'>
            <p>
                <span>${Number.parseFloat(coin.price).toFixed(2)}</span>
                <span className='coinCard__right-change'>{coin.change}%</span>
            </p>
        </div>
    </div>
  )
}

export default CoinCard