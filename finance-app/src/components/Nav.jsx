import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Nav () {
    const [market, setMarket] =useState(null)
 
    useEffect(() => {
       
        const getMarket = async () => {
        const response = await axios.get(`https://financialmodelingprep.com/api/v3/quotes/index?apikey=91c950cb2afdc944512490e8ae2113cc`)
       
        console.log(response.data)
        setMarket(response.data)
        }
        getMarket()
        
       
    }, [])
    
    
    if (!market) {
        return <h2> Loading please wait</h2>
    } else {
    return (
        <div className='wrapper'>

            <div className='navlinks2'>
            <Link to='/' className='linkz'>Home</Link>
            <Link to ='/company' className='linkz'>Company</Link>
            <Link to ='/finance' className='linkz'>Stock Search</Link>
            <Link to ='/stocks' className='linkz'>Stocks</Link>
            </div>

            <div className='markets'>
                <h3 >{market.find(e => e.name === 'Dow Jones Industrial Average').name}:   {market.find(e => e.name === 'Dow Jones Industrial Average').price}     {market.find(e => e.name === 'Dow Jones Industrial Average').changesPercentage.toFixed(2)}%</h3>
                
                <h3>{market.find(e => e.name === 'S&P 500').name}
                :   {market.find(e => e.name === 'S&P 500')
                .price.toFixed(2)}        {market.find(e => e.name === 'S&P 500').changesPercentage.toFixed(2)}%</h3>

                <h3>{market.find(e => e.name === 'NASDAQ Composite').name}
                :   {market.find(e => e.name === 'NASDAQ Composite')
                .price.toFixed(2)}     {market.find(e => e.name === 'NASDAQ Composite').changesPercentage.toFixed(2)}%</h3>
            
                <h3>{market.find(e => e.name === 'Russell 2000').name}
                :   {market.find(e => e.name === 'Russell 2000')
                .price.toFixed(2)}     {market.find(e => e.name === 'Russell 2000').changesPercentage.toFixed(2)}%</h3>
                
            </div>
            
        </div>
    )
    }
}