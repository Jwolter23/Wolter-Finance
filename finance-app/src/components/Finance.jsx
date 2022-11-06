import { useState, useEffect } from 'react'
import axios from 'axios'


export default function Finance (props) {

    //create a state for our data 

    const [finance, setFinance] =useState(null)
    
   


    //we need to call an axios function
  

    const getFinance = async () => {
        const response = await axios.get(`https://financialmodelingprep.com/api/v3/search-ticker?query=${props.formState.search}&limit=10&exchange=NYSE&apikey=91c950cb2afdc944512490e8ae2113cc`)
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
        return   <form onSubmit={props.handleSubmit}>
        <label htmlFor='search'>Search: </label>
        <input type='text' id='search' onChange={props.handleChange} value={props.formState.search}></input>
        <button type='submit' onClick={getFinance}>Send</button>
                </form>
        
    } else {
        return (
            <div>
                <h1>{finance[0].symbol}: {finance[0].name} </h1>


                    <form onSubmit={props.handleSubmit}>
                        <label htmlFor='search'>Search Tiker: </label>
                        <input type='text' id='search' onChange={props.handleChange} value={props.formState.search}></input>
                        <button type='submit' onClick={getFinance}>Send</button>
                    </form>
                   
            </div>
        )
    }

}