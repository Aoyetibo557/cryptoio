import React from 'react';
import "./BasicInput.css";

function BasicInput({label, color, name, value, type, size, placeholder, onChange, isError, ...props}) {
  return (
    <div className={`basicinput input__${size}`}>
        <label className="label" htmlFor={label}>{label}</label>
        <input 
            value={value}
            type={type}
            size={size}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            className={`input ${color} ${isError ? 'error' : ''}`}
            {...props}
        />
    </div>
  )
}

export default BasicInput