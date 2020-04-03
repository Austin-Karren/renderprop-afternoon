import React, {Component} from 'react';
import CurrencyDisplay from './CurrencyDisplay'

class CurrencyConverter extends Component {
   state = {
      currencyChosen: false,
      selectedCurrency: 'Select Currency',
      amount: 0
   }

   handleAdd = () => {
      this.setState((prevState) => {
         return {
            amount: prevState.amount + 1
         }
      })
   }

   handleSubtract = () => {
      this.setState((prevState) => {
         return {
            amount: prevState.amount -1
         }
      })
   }

   handleSelectOptions = (event) => {
      const userValue = event.target.value;
      this.setState(() => {
         return {
            selectedCurrency: userValue,
            currencyChosen: userValue === 'Select Currency' ? false : true
         }
      })
   }

   render() { 
      const currencyData = [
         { name: 'Japanese Yen', symbol: '¥', rate: 113.6, id: 0 },
         { name: 'British Pound', symbol: '£', rate: 0.77, id: 1 },
         { name: 'Canadian Dollar', symbol: 'CAD', rate: 1.32, id: 2 },
         { name: 'Mexican Peso', symbol: 'Mex$', rate: 20.41, id: 3 },
         { name: 'Swiss Franc', symbol: 'Fr.', rate: 1.01, id: 4 }
      ]

      const currencyOptions = currencyData.map((currency, index) => (
         <option key={currency} value={index}>
            {currency.name}
         </option>
      ))

      return ( 
         <div> 
            <select value={this.state.selectedCurrency}
               onChange={this.handleSelectOptions}
            >
               <option value='Select Currency'>Select Currency</option>
               {currencyOptions}
            </select>
            <div>
               <button className="add" onClick={this.handleAdd}>+</button>
               <button className="minus" onClick={this.handleSubtract}>-</button>
            </div>
               {this.state.currencyChosen ? (
                  this.props.render(
                     currencyData[this.state.selectedCurrency],
                     this.state.amount
                  )
               ) : (
                  <p>Please Select Currency</p>
               )}
         </div>
       );
   }
}
 
export default CurrencyConverter;