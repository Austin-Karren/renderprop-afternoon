import React from 'react';

const CurrencyDisplay = (props) => (
   <p>
      {console.log(props)}
      US Dollar ${props.amount.toFixed(2)} - {props.currencyData.name}{' '}
      {props.currencyData.symbol}
      {(props.amount * props.currencyData.rate).toFixed(2)}
   </p>
)

export default CurrencyDisplay;