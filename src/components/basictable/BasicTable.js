import React from 'react';
import "./BasicTable.css";
import Button from '../button/Button'
import { Link } from 'react-router-dom';

function BasicTable({uuid, name, iconUrl, symbol, marketCap, price, change}) {
  return (
    <div key={uuid} className='basictable'>
        <div className='basictable__div'>
            <p className='coin__p'>
              <span >
                  <img className='table__image' src={iconUrl} alt={name} />
              </span>
                <Link to={`/markets/${name}/${uuid}`}>
                <span className='coin__p-name'>{name}</span>
                <span className='coin__p-symbol'>{symbol}</span>
              </Link>
            </p>
            <p className='coin__p-marketcap'>${marketCap}</p>
            <p className='coin__p-price'>${Number.parseFloat(price).toFixed(1)}</p>
            <p className={change >= 0.0 ? 'coin__p-change-positive' : "coin__p-change-negative" }>{change}%</p>
            <Button color="secondary" label="Trade" url="/" />
        </div>
    </div>
  )
}

export default BasicTable