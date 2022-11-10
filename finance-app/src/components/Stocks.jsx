import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Stocks () {

    //Functions for sorting

    let beta = () => {
        setGainer([...gainer].sort((a, b) => a.change > b.change ? 1 : -1 ))
      } 

      let charlie = () => {
        setGainer([...gainer].sort((a, b) => a.change < b.change ? 1 : -1 ))
      } 


      let delta = () => {
        setLoser([...loser].sort((a, b) => a.change > b.change ? 1 : -1 ))
      } 

      let gamma = () => {
        setLoser([...loser].sort((a, b) => a.change < b.change ? 1 : -1 ))
      } 


    const [gainer, setGainer] =useState(null)
    
    useEffect(() => {
        
        const getGainer = async () => {
        const response9 = await axios.get(`https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=${process.env.REACT_APP_FMP_KEY}`)
  
         
        setGainer(response9.data)
       

        }
        getGainer()

        // setGainer(getGainer, 5000)

    }, [])
    


    const [loser, setLoser] =useState(null)
  
    useEffect(() => {
        
        const getLoser = async () => {
        const response8 = await axios.get(`https://financialmodelingprep.com/api/v3/stock_market/losers?apikey=${process.env.REACT_APP_FMP_KEY}`)
 
         
        setLoser(response8.data)
        

        }
        getLoser()

        // setLoser(getLoser, 5000)
    }, [])



    const [active, setActive] =useState(null)
    
    useEffect(() => {
        
        const getActive = async () => {
        const response7 = await axios.get(` https://financialmodelingprep.com/api/v3/stock_market/actives?apikey=${process.env.REACT_APP_FMP_KEY}`)
        

        setActive(response7.data)
        

        }
        getActive()

        // setActive(getActive, 5000)
    }, [])



    if (!gainer || !loser || !active) {
        return <h2> Loading please wait</h2>
    } else {
        return (
            
            <div className='activityGrid'>
                
                <div className='gainerDiv'>
                    <div className='sortingButtonDiv'>
                <button className='sortingButton' onClick={beta}>Smallest to Largest %</button>
                <button className='sortingButton' onClick={charlie}>Largest to Smallest %</button>
                    </div>

                <h1 className='largeGain'>Largest Gainers</h1>
                
                {
                    gainer.map((gain, index) => (
                        <div key={index}>
                            
                           <h2> {gain.name} </h2> <h5>{gain.symbol}</h5>
                           <div className='gainPricePer'>
                            <h4> ${gain.price} </h4> 
                            <h4 className={gain.change.toString().includes('-') ? 'negative' : 'positive'}> {gain.change}% </h4>
                            </div>
                        </div>
                        
                    ))

                    
                }
                </div>
                <div className='loserDiv'>
                    <div className='sortingButtonDiv'>
                <button className='sortingButton' onClick={delta}>Largest to Smallest %</button>
                <button className='sortingButton' onClick={gamma}>Smallest to Largest %</button>
                    </div>

                <h1 className='largGain'>Largest Losers</h1>
                    
                {
                    loser.map((lose) => (
                        <div key={lose.symbol}>
                            <h2>{lose.name}</h2> <h5>{lose.symbol}</h5>
                            <div className='losePricePer'>
                            <h4 >${lose.price}</h4> 
                            <h4 className={lose.change.toString().includes('-') ? 'negative' : 'positive'}>{lose.change}%</h4>
                            </div>
                        </div>
                    ))
                }
                </div>


                <div className='activeDiv'>
                <h1 className='largeGain'>Most Active</h1>
                {
                    active.map((act) => (
                        <div key={act.name}>
                            <h2>{act.name}</h2> <h5>{act.symbol}</h5>
                            <div className='activePricePer'>
                            <h4>${act.price}</h4> 
                            <h4 className={act.change.toString().includes('-') ? 'negative' : 'positive'}>{act.change}%</h4>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>

                
        )
    }


}