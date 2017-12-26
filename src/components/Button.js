import React from 'react';

const Button = props => {
  const {textValue, onClick} = props
  return (
    <button className="btn" onClick={onClick}>{textValue}</button>
  )
}

export default Button
