import React from 'react';
import BasicSparklines from '../sparklines/BasicSparklines';
import './Card.css';
import {Link} from 'react-router-dom'; 

function Card({uuid, size, name, iconUrl, price, btcPrice,symbol, sparklines, change, color, orientation}) {
  return (
    <Link to={`/markets/${name}/${uuid}`} key={uuid} className={`card card-${size} card-${orientation}`}>
        <div className='card__header'>
            <h3 className='card__name'>{name}</h3>
            <img className='card__image' src={iconUrl} alt={name} />
        </div>
        <div className='card__body'>
            <p>${Number.parseFloat(price).toFixed(5)}</p><br />
            <p>{Number.parseFloat(btcPrice).toFixed(5)} BTC</p>
            <p className={change > 0.00 ? 'card-change-positive' : 'card-change-negative'}>{change}%</p>
        </div>
        <div>
            <BasicSparklines
                data={sparklines}
                color={color}
                margin={10}
                limit={25}

            />
        </div>
    </Link>
  )
}

export default Card