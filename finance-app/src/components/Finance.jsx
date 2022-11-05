import { useState, useEffect } from 'react'
import axios from 'axios'


export default function Finance (props) {

    //create a state for our data 

    const [finance, setFinance] =useState({})



    //we need to call an axios function
    useEffect(() => {
        
        const getFinance = async () => {
        const response = await axios.get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=4XJMCJSHN1P8RQPS`)
        console.log(response.data)
         //we need to set state of our data
        setFinance(response.data)

        }
        getFinance()
    }, [])
    
   

    //we need to see the data
    //also create a guard operator
    //so if data takes a few seconds 
    //site doesnt break

    if (!finance) {
        return <h2> Loading please wait</h2>
    } else {
        return (
            <div>
                <h1> {finance.Symbol}: {finance.Name}</h1>
                <h2>{finance.Exchange}</h2>
                <h3>{finance.Description}</h3>
                <div className='specificFinIndo'>
                    <h4>Target Price: {finance.AnalystTargetPrice}</h4>
                    <h4>Market Cap: {finance.MarketCapitalization}</h4>
                    <h4>Gross Margin: {finance.GrossProfitTTM}</h4>



                    <form onSubmit={props.handleSubmit}>
                        <label htmlFor='searcg'>Search: </label>
                        <input type='text' id='search' onChange={props.handleChange} value={props.formState.search}></input>
                        <button type='submit'>Send</button>
                    </form>
                   

                </div>
            </div>
        )
    }

}