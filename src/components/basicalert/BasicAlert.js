import React, { useState } from 'react';
import "./BasicAlert.css";
import { CgCloseO } from 'react-icons/cg';



function BasicAlert({type, message, ...props}) {
    const theme = type || "info";

    const [showState, setShowState] = useState(true);

    const handleClose = () => {
        setShowState(false);
    }

  return (
    <div className={!showState ? "closedAlert" : `basicalert alert__${theme}`}>
        <button onClick={handleClose} className='delete'>
            <CgCloseO className='delete__icon' />
        </button>
        <p className='alert__msg'>{message}</p>
    </div>
  )
}

export default BasicAlert