import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Company () {

    //create a state for our data 

    const [company, setCompany] =useState({})



    //we need to call an axios function
    useEffect(() => {
        
        const getCompany = async () => {
        const response = await axios.get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=4XJMCJSHN1P8RQPS`)
        console.log(response.data)
         //we need to set state of our data
        setCompany(response.data)

        }
        getCompany()
    }, [])
    
   

    //we need to see the data
    //also create a guard operator
    //so if data takes a few seconds 
    //site doesnt break

    if (!company) {
        return <h2> Loading please wait</h2>
    } else {
        return (
            <div>
                <h1> {company.Symbol}: {company.Name}</h1>
                <h2>{company.Exchange}</h2>
                <h3>{company.Description}</h3>
                <div className='specificFinIndo'>
                    <h4>Target Price: {company.AnalystTargetPrice}</h4>
                    <h4>Market Cap: {company.MarketCapitalization}</h4>
                    <h4>Gross Margin: {company.GrossProfitTTM}</h4>

                </div>
            </div>
        )
    }

}