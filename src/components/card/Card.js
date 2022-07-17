import React, {useState, useEffect} from 'react';
import BasicSparklines from '../sparklines/BasicSparklines';
import './Card.css';
import {Link} from 'react-router-dom'; 
import { Skeleton } from '@mui/material';

function Card({uuid, size, name, iconUrl, price, btcPrice,symbol, sparklines, change, color, orientation}) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, [loading]);
  return loading === false ? (
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
                isBars={false}
                isSpots={true}
            />
        </div>

        
    </Link>
  ): <Skeleton className='card__skeleton' variant="rectangular" width={210} height={118} />
}

export default Card