import { useState, useEffect } from 'react'
import axios from 'axios'


export default function Finance (props) {

    //create a state for our data 

    const [finance, setFinance] =useState(null)
    
   


    //we need to call an axios function
   

    const getFinance = async () => {
        const response = await axios.get(`https://financialmodelingprep.com/api/v3/quote/${props.formState.search.toUpperCase()}?apikey=${process.env.REACT_APP_FMP_KEY}`)
        console.log(response.data)
         //we need to set state of our data
        setFinance(response.data)

        }
      
    const [news, setNews] =useState(null)

    const getNews = async () => {
        const response1 = await axios.get(`https://financialmodelingprep.com/api/v3/stock_news?tickers=${props.formState.search.toUpperCase()}&limit=10&apikey=${process.env.REACT_APP_FMP_KEY}`)
        console.log(response1.data)
         //we need to set state of our data
        setNews(response1.data)

        }
        
    

    

    

    if (!finance || !news) {
        return   <form className='submitForm' onSubmit={props.handleSubmit}>
        <label htmlFor='search'>Search Tiker: </label>
        <input type='text' placeholder='AAPL, WMT, nvda, ibm'id='search' onChange={props.handleChange} value={props.formState.search}></input>
        <button type='submit' onClick={()=>{getFinance(); getNews()}}>Search</button>
                </form>
        
    } else if (finance[0].pe){
        return (
            <div className='searchHolder'>
                        <form className='submitForm'onSubmit={props.handleSubmit}>
                            <label htmlFor='search'>Search Tiker: </label>
                            <input type='text' id='search' onChange={props.handleChange} value={props.formState.search}></input>
                            <button type='submit' onClick={()=>{getFinance(); getNews()}}>Search</button>
                        </form>
                <div className='totalSearchDiv'>
                       
                    <div className='stockSearchInfo'>
                        <h1>{finance[0].symbol}: {finance[0].name} </h1>
                        <div className='priceDiv'>
                        <h2>Price: </h2>
                        <h2 className={finance[0].changesPercentage.toString().includes('-') ? 'negative' : 'positive'}> {finance[0].price} </h2>
                        </div>
                        <div className='stockPercentClass'>
                        <h3 className={finance[0].change.toString().includes('-') ? 'negative' : 'positive'}>Change: $ {finance[0].change.toFixed(3)} </h3>
                        <h3 className={finance[0].changesPercentage.toString().includes('-') ? 'negative' : 'positive'}>{finance[0].changesPercentage.toFixed(3)}%</h3>
                        </div>
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
                        <div className='newsStory'>
                            <a href={news[0].url}target='_blank' className='alink'>
                                <h2 className='newsTitle'>{news[0].title}</h2>
                                <h3>{news[0].site}, {news[0].publishedDate}, {news[0].symbol}</h3>
                                <img src={news[0].image}></img>
                            </a>
                        </div>
    
                        <div className='newsStory'>
                            <a href={news[1].url}target='_blank' className='alink'>
                                <h2 className='newsTitle'>{news[1].title}</h2>
                                <h3>{news[1].site}, {news[1].publishedDate}, {news[1].symbol}</h3>
                                <img src={news[1].image}></img>
                            </a>
                        </div>
    
                        <div className='newsStory'>
                            <a href={news[2].url}target='_blank' className='alink'>
                                <h2 className='newsTitle'>{news[2].title}</h2>
                                <h3>{news[2].site}, {news[2].publishedDate}, {news[2].symbol}</h3>
                                <img src={news[2].image}></img>
                            </a>
                        </div>
    
                        <div className='newsStory'>
                            <a href={news[3].url}target='_blank' className='alink'>
                                <h2 className='newsTitle'>{news[3].title}</h2>
                                <h3>{news[3].site}, {news[3].publishedDate}, {news[3].symbol}</h3>
                                <img src={news[3].image}></img>
                            </a>
                        </div>
                    </div>
                       
                </div>
            </div>
            )
    } else { 
        return (
        <div className='searchHolder'>
             <form className='submitForm'onSubmit={props.handleSubmit}>
                        <label htmlFor='search'>Search Tiker: </label>
                        <input type='text' id='search' onChange={props.handleChange} value={props.formState.search}></input>
                        <button type='submit' onClick={()=>{getFinance(); getNews()}}>Search</button>
                    </form>
            <div className='totalSearchDiv'>
                   
                <div className='stockSearchInfo'>
                    <h1>{finance[0].symbol}: {finance[0].name} </h1>
                    <div className='priceDiv'>
                    <h2>Price:</h2>
                    <h2 className={finance[0].changesPercentage.toString().includes('-') ? 'negative' : 'positive'}> {finance[0].price} </h2>
                    </div>
                    <div className='stockPercentClass'>
                    <h3 className={finance[0].change.toString().includes('-') ? 'negative' : 'positive'}>Change: $ {finance[0].change.toFixed(3)}</h3> 
                    <h3 className={finance[0].changesPercentage.toString().includes('-') ? 'negative' : 'positive'}>{finance[0].changesPercentage.toFixed(3)}%</h3>
                    </div>
                    <h3>Day High: {finance[0].dayHigh}</h3>
                    <h3>Day Low: {finance[0].dayLow}</h3>
                    <h3>EPS: {finance[0].eps}</h3>
                    <h3>Exchange: {finance[0].exchange}</h3>
                    <h3>Shares Outstanding: {finance[0].sharesOutstanding}</h3>
                    <h3>Volume: {finance[0].volume}</h3>
                    <h3>Year High: {finance[0].yearHigh}</h3>
                    <h3>Year Low: {finance[0].yearLow}</h3>
                </div>

                <div className='stockSearchNews'>
                    <div className='newsStory'>
                        <a href={news[0].url}target='_blank' className='alink'>
                            <h2 className='newsTitle'>{news[0].title}</h2>
                            <h3>{news[0].site}, {news[0].publishedDate}, {news[0].symbol}</h3>
                            <img src={news[0].image}></img>
                        </a>
                    </div>

                    <div className='newsStory'>
                        <a href={news[1].url}target='_blank' className='alink'>
                            <h2 className='newsTitle'>{news[1].title}</h2>
                            <h3>{news[1].site}, {news[1].publishedDate}, {news[1].symbol}</h3>
                            <img src={news[1].image}></img>
                        </a>
                    </div>

                    <div className='newsStory'>
                        <a href={news[2].url}target='_blank' className='alink'>
                            <h2 className='newsTitle'>{news[2].title}</h2>
                            <h3>{news[2].site}, {news[2].publishedDate}, {news[2].symbol}</h3>
                            <img src={news[2].image}></img>
                        </a>
                    </div>

                    <div className='newsStory'>
                        <a href={news[3].url}target='_blank' className='alink'>
                            <h2 className='newsTitle'>{news[3].title}</h2>
                            <h3>{news[3].site}, {news[3].publishedDate}, {news[3].symbol}</h3>
                            <img src={news[3].image}></img>
                        </a>

                    </div>
                </div>
                   
            </div>
        </div>
        )
    }

}
