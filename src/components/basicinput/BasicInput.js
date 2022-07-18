import React from 'react';
import "./BasicInput.css";

function BasicInput({label, color, name, value, type, size, placeholder,  onChange, isError,errMsg, ...props}) {
  return (
    <div className={`basicinput input__${size}`}>
        <input 
          value={value}
          type={type}
          size={size}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          required={true}
          className={`input ${color} ${isError ? 'error' : ''}`}
          {...props}
        />
        <label className="label" htmlFor={label}>{label}</label>
        {isError && (
          <p className='errMsg'>{errMsg}</p>
        )}

    </div>
  )
}

export default BasicInput