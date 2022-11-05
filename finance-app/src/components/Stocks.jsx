import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Stocks () {

    //create a state for our data 




    const [stocks, setStocks] =useState(null)
    //we need to call an axios function
    useEffect(() => {
        
        const getStocks = async () => {
        const response = await axios.get(`https://financialmodelingprep.com/api/v3/quote/AAPL?apikey=91c950cb2afdc944512490e8ae2113cc`)
        

         //we need to set state of our data
        setStocks(response.data)

        }
        getStocks()
    }, [])
    
   

    //we need to see the data
    //also create a guard operator
    //so if data takes a few seconds 
    //site doesnt break

    if (!stocks) {
        return <h2> Loading please wait</h2>
    } else {
        return (
            <div>
                <h1> {stocks[0].symbol}: {stocks[0].price} </h1>
                <h2>{stocks[0].volume}</h2>

                
            </div>
        )
    }


}