import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Finance () {

    //create a state for our data 

    const [finance, setFinance] =useState({})



    //we need to call an axios function
    useEffect(() => {
        const getFinance = async () => {
        const response = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=META&apikey=4XJMCJSHN1P8RQPS`)
        console.log(response.data)
         //we need to set state of our data
        setFinance(response.data)

        }
        getFinance()
    }, [])
    
   


    //we need to see the data
    console.log(finance)


    //also create a guard operator
    //so if data takes a few seconds 
    //site doesnt break

    if (!finance) {
        return <h2> Loading please wait</h2>
    } else {
        return (
            <div>
                <h2>Tiker: {finance.symbol}</h2>
            </div>
        )
    }

}