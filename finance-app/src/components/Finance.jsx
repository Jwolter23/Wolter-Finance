import { useState, useEffect } from 'react'
import axios from 'axios'


export default function Finance (props) {

    //create a state for our data 

    const [finance, setFinance] =useState(null)
    
   


    //we need to call an axios function
  

    const getFinance = async () => {
        const response = await axios.get(`https://financialmodelingprep.com/api/v3/quote/${props.formState.search.toUpperCase()}?apikey=91c950cb2afdc944512490e8ae2113cc`)
        console.log(response.data)
         //we need to set state of our data
        setFinance(response.data)

        }

        
        
    
    //will only take NYSE or NASDAQ but not both
   
    //we need to see the data
    //also create a guard operator
    //so if data takes a few seconds 
    //site doesnt break

    if (!finance) {
        return   <form className='submitForm' onSubmit={props.handleSubmit}>
        <label htmlFor='search'>Search: </label>
        <input type='text' id='search' onChange={props.handleChange} value={props.formState.search}></input>
        <button type='submit' onClick={getFinance}>Send</button>
                </form>
        
    } else {
        return (
            <div>
                


                    <form className='submitForm'onSubmit={props.handleSubmit}>
                        <label htmlFor='search'>Search Tiker: </label>
                        <input type='text' id='search' onChange={props.handleChange} value={props.formState.search}></input>
                        <button type='submit' onClick={getFinance}>Send</button>
                    </form>

                <h1>{finance[0].symbol}: {finance[0].name} </h1>
                <h2>Price: {finance[0].price} </h2>
                <h3>Change: {finance[0].change.toFixed(3)}, {finance[0].changesPercentage.toFixed(3)}%</h3>
                <h3>Day High: {finance[0].dayHigh}</h3>
                <h3>Day Low: {finance[0].dayLow}</h3>
                   
            </div>
        )
    }

}