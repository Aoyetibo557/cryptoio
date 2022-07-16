import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom'

function Button({url="/", label, color}) {
  return (
    <Link className={`button button-${color}`} to={url}> {label}</Link>
  )
}

export default Button