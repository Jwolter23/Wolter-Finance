import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Stocks () {

    //create a state for our data 

    const [stocks, setStocks] =useState({})



    //we need to call an axios function
    useEffect(() => {
        
        const getStocks = async () => {
        const response = await axios.get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=ROKU&apikey=4XJMCJSHN1P8RQPS`)
        
        console.log(response.data)
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
                <h1> {stocks.Symbol}: {stocks.Name}</h1>
                <h2>{stocks.Exchange}</h2>
                <h3>{stocks.Description}</h3>
                <div className='specificFinIndo'>
                    <h4>Target Price: {stocks.AnalystTargetPrice}</h4>
                    <h4>Market Cap: {stocks.MarketCapitalization}</h4>
                    <h4>Gross Margin: {stocks.GrossProfitTTM}</h4>

                </div>
            </div>
        )
    }


}