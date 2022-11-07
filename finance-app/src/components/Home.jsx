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
                <a href={Home[0].url}target='_blank' className='alink'>
                <h1 className='storyTitle'>{Home[0].title}</h1>
                <h3 className='storyInfo'> {Home[0].site}, {Home[0].publishedDate}, {Home[0].symbol}</h3>
               <img className='storyImg0' src={Home[0].image}></img></a> 
            
             </div>
             <div className='story1'>
             <a href={Home[1].url}target='_blank' className='alink'>
             <h1 className='storyTitle'>{Home[1].title}</h1>
                <h3 className='storyInfo'>{Home[1].site}, {Home[1].publishedDate},     {Home[1].symbol}</h3>
                <img className='storyImg' src={Home[1].image}></img></a>
                
                
             </div> 
             <div className='story2'>
             <a href={Home[2].url}target='_blank' className='alink'>
             <h1 className='storyTitle'>{Home[2].title}</h1>
                <h3 className='storyInfo'>{Home[2].site},  {Home[2].publishedDate},    {Home[2].symbol}</h3>
                <img className='storyImg' src={Home[2].image}></img></a>
             </div> 
             <div className='story3' >
             <a href={Home[3].url}target='_blank' className='alink'>
             <h1 className='storyTitle'>{Home[3].title}</h1>
                <h3 className='storyInfo'>{Home[3].site},  {Home[3].publishedDate},    {Home[3].symbol}</h3>
                <img className='storyImg' src={Home[3].image}></img></a>
             </div> 
             <div className='story4'>
             <a href={Home[4].url}target='_blank' className='alink'>
             <h1 className='storyTitle'>{Home[4].title}</h1>
                <h3 className='storyInfo'>{Home[4].site},  {Home[4].publishedDate},    {Home[4].symbol}</h3>
                <img className='storyImg' src={Home[4].image}></img></a>
             </div> 
             <div className='story5'>
             <a href={Home[5].url}target='_blank' className='alink'>
             <h1 className='storyTitle'>{Home[5].title}</h1>
                <h3 className='storyInfo'>{Home[5].site},  {Home[5].publishedDate},    {Home[5].symbol}</h3>
                <img className='storyImg' src={Home[5].image}></img></a>
             </div> 

             <div className='story6'>
             <a href={Home[6].url}target='_blank' className='alink'>
             <h1 className='storyTitle'>{Home[6].title}</h1>
                <h3 className='storyInfo'>{Home[6].site},  {Home[6].publishedDate},    {Home[5].symbol}</h3>
                <img className='storyImg' src={Home[6].image}></img></a>
             </div> 
             

        </div>    
        )
    }


}