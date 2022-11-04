import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Home () {

    //create a state for our data 

    const [Home, setHome] =useState(null)



    //we need to call an axios function
    useEffect(() => {
        
        const getHome = async () => {
        const response = await axios.get(`https://financialmodelingprep.com/api/v3/fmp/articles?page=0&size=5&apikey=91c950cb2afdc944512490e8ae2113cc`)
        
        console.log(response.data)
         //we need to set state of our data
        setHome(response.data)

        //     console.log(company)
        // console.log(company['Meta Data'])
        }
        getHome()
    }, [])
    
   

    //we need to see the data
    //also create a guard operator
    //so if data takes a few seconds 
    //site doesnt break

    if (!Home) {
        return <h2> Loading please wait</h2>
    } else {
        return (
        <div>
            <div className='story0'>
                <h1>{Home.content[0].title}</h1>
                <h3>{Home.content[0].author},  {Home.content[0].date}, {Home.content[0].tickers}</h3>
                <p>{Home.content[0].content}</p>
                <img src={Home.content[0].image} alt=''></img>
             </div>
             <div className='story0'>
                <h1>{Home.content[1].title}</h1>
                <h3>{Home.content[1].author},  {Home.content[1].date}, {Home.content[1].tickers}</h3>
                <p>{Home.content[1].content}</p>
                <img src={Home.content[1].image} alt=''></img>
             </div>
        </div>    
        )
    }


}