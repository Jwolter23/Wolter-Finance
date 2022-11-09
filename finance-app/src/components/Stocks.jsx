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
    


    const [loser, setLoser] =useState(null)
    //we need to call an axios function
    useEffect(() => {
        
        const getLoser = async () => {
        const response8 = await axios.get(`https://financialmodelingprep.com/api/v3/stock_market/losers?apikey=91c950cb2afdc944512490e8ae2113cc`)
        

         //we need to set state of our data
         console.log(response8.data)
        setLoser(response8.data)
        

        }
        getLoser()
    }, [])



    const [active, setActive] =useState(null)
    
    useEffect(() => {
        
        const getActive = async () => {
        const response7 = await axios.get(` https://financialmodelingprep.com/api/v3/stock_market/actives?apikey=91c950cb2afdc944512490e8ae2113cc`)
        

         console.log(response7.data)
        setActive(response7.data)
        

        }
        getActive()
    }, [])





   
   

    //we need to see the data
    //also create a guard operator
    //so if data takes a few seconds 
    //site doesnt break

    if (!gainer || !loser || !active) {
        return <h2> Loading please wait</h2>
    } else {
        return (
            
               <div className='activityGrid'>
                <div className='gainerDiv'>
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
                <div className='loserDiv'>
                <h1>Largest Losers</h1>
                {
                    loser.map((lose) => (
                        <div>
                            <h2>{lose.name}</h2> <h5>{lose.symbol}</h5>
                            <h4>${lose.price} {lose.change}%</h4>
                        </div>
                    ))
                }
                </div>


                <div className='activeDiv'>
                <h1>Most Active</h1>
                {
                    active.map((act) => (
                        <div>
                            <h2>{act.name}</h2> <h5>{act.symbol}</h5>
                            <h4>${act.price} {act.change}%</h4>
                        </div>
                    ))
                }
                </div>
               </div>

                
        )
    }


}