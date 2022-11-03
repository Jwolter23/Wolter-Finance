import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Company () {

    //create a state for our data 

    const [company, setCompany] =useState(null)



    //we need to call an axios function
    useEffect(() => {
        
        const getCompany = async () => {
        const response = await axios.get(`https://financialmodelingprep.com/api/v3/profile/AAPL?apikey=91c950cb2afdc944512490e8ae2113cc`)
        
        console.log(response.data)
         //we need to set state of our data
        setCompany(response.data)

        //     console.log(company)
        // console.log(company['Meta Data'])
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
                 <h1>{company[0].symbol}: {company[0].companyName}</h1>
                 <h3>{company[0].description}</h3>
                 <img src={company[0].image}></img>
                 <h3>Market Cap: {company[0].mktCap}</h3>
                 <h3>Current Price: {company[0].price}</h3>
                 <h3>Range: {company[0].range}</h3>

             </div>
            
        )
    }


}