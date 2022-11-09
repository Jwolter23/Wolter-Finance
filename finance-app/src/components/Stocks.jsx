import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Stocks () {

    //create a state for our data 




    const [gainer, setGainer] =useState(null)
    //we need to call an axios function
    useEffect(() => {
        
        const getGainer = async () => {
        const response9 = await axios.get(`https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=91c950cb2afdc944512490e8ae2113cc`)
        

         //we need to set state of our data
         console.log(response9.data)
        setGainer(response9.data)
        console.log(gainer)

        }
        getGainer()
    }, [])
    
   

    //we need to see the data
    //also create a guard operator
    //so if data takes a few seconds 
    //site doesnt break

    if (!gainer) {
        return <h2> Loading please wait</h2>
    } else {
        return (
            
               <div>
                <h1>Largest Gainers</h1>
                {
                    gainer.map((gain) => (
                        <div>
                            
                           <h2> {gain.name} </h2> <h5>{gain.symbol}</h5>
                            <h4> ${gain.price} {gain.change}% </h4>
                        </div>
                        
                    ))
                }
               </div>

                
        )
    }


}