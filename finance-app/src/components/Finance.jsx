import { useState, useEffect } from 'react'
import axios from 'axios'


export default function Finance (props) {

    //create a state for our data 

    const [finance, setFinance] =useState(null)
    
   


    //we need to call an axios function
   

    const getFinance = async () => {
        const response = await axios.get(`https://financialmodelingprep.com/api/v3/quote/${props.formState.search.toUpperCase()}?apikey=91c950cb2afdc944512490e8ae2113cc`)
        console.log(response.data)
         //we need to set state of our data
        setFinance(response.data)

        }
      
    const [news, setNews] =useState(null)

    const getNews = async () => {
        const response1 = await axios.get(`https://financialmodelingprep.com/api/v3/stock_news?tickers=${props.formState.search.toUpperCase()}&limit=10&apikey=91c950cb2afdc944512490e8ae2113cc`)
        console.log(response1.data)
         //we need to set state of our data
        setNews(response1.data)

        }
        
    

    

    

    if (!finance || !news) {
        return   <form className='submitForm' onSubmit={props.handleSubmit}>
        <label htmlFor='search'>Search: </label>
        <input type='text' id='search' onChange={props.handleChange} value={props.formState.search}></input>
        <button type='submit' onClick={()=>{getFinance(); getNews()}}>Send</button>
                </form>
        
    } else {
        return (
            <div>
                


                    <form className='submitForm'onSubmit={props.handleSubmit}>
                        <label htmlFor='search'>Search Tiker: </label>
                        <input type='text' id='search' onChange={props.handleChange} value={props.formState.search}></input>
                        <button type='submit' onClick={()=>{getFinance(); getNews()}}>Send</button>
                    </form>
                <div className='stockSearchInfo'>
                <h1>{finance[0].symbol}: {finance[0].name} </h1>
                <h2>Price: {finance[0].price} </h2>
                <h3>Change: {finance[0].change.toFixed(3)}, {finance[0].changesPercentage.toFixed(3)}%</h3>
                <h3>Day High: {finance[0].dayHigh}</h3>
                <h3>Day Low: {finance[0].dayLow}</h3>
                <h3>EPS: {finance[0].eps}</h3>
                <h3>Exchange: {finance[0].exchange}</h3>
                <h3>PE: {finance[0].pe.toFixed(3)}</h3>
                <h3>Shares Outstanding: {finance[0].sharesOutstanding}</h3>
                <h3>Volume: {finance[0].volume}</h3>
                <h3>Year High: {finance[0].yearHigh}</h3>
                <h3>Year Low: {finance[0].yearLow}</h3>
                </div>

                <div className='stockSearchNews'>
                    <h3>{news[0].title}</h3>
                    <h3>{news[0].site}, {news[0].publishedDate}, {news[0].symbol}</h3>
                    <h3>{news[0].image}</h3>
                </div>
                   
            </div>
        )
    }

}