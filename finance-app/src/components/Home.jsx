import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Home () {

    //create a state for our data 

    const [Home, setHome] =useState(null)



    //we need to call an axios function
    useEffect(() => {
        
        const getHome = async () => {
        const response = await axios.get(`https://financialmodelingprep.com/api/v3/stock_news?limit=25&apikey=91c950cb2afdc944512490e8ae2113cc`)
        
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
        <div className='storyGrid'>
            <div className='story0'>
                <h1>{Home[0].title}</h1>
                <h3> {Home[0].site}, {Home[0].publishedDate}, {Home[0].symbol}</h3>
               <a href={Home[0].url}target='_blank'><img src={Home[0].image}></img></a> 
                
             </div>
             <div className='story1'>
             <h1>{Home[1].title}</h1>
                <h3>{Home[1].site}, {Home[1].publishedDate},     {Home[1].symbol}</h3>
                <a href={Home[1].url}target='_blank'><img src={Home[1].image}></img></a>
                
             </div> 
             <div className='story2'>
             <h1>{Home[2].title}</h1>
                <h3>{Home[2].site},  {Home[2].publishedDate},    {Home[2].symbol}</h3>
                <a href={Home[2].url}target='_blank'><img src={Home[2].image}></img></a>
             </div> 
             <div className='story3'>
             <h1>{Home[3].title}</h1>
                <h3>{Home[3].site},  {Home[3].publishedDate},    {Home[3].symbol}</h3>
                <a href={Home[3].url}target='_blank'><img src={Home[3].image}></img></a>
             </div> 
             <div className='story4'>
             <h1>{Home[4].title}</h1>
                <h3>{Home[4].site},  {Home[4].publishedDate},    {Home[4].symbol}</h3>
                <a href={Home[4].url}target='_blank'><img src={Home[4].image}></img></a>
             </div> 
             <div className='story5'>
             <h1>{Home[5].title}</h1>
                <h3>{Home[5].site},  {Home[5].publishedDate},    {Home[5].symbol}</h3>
                <a href={Home[5].url}target='_blank'><img src={Home[5].image}></img></a>
             </div> 
        </div>    
        )
    }


}