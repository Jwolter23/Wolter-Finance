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
    


    const [sector, setSector] =useState(null)
 
    useEffect(() => {
       
        const getSector = async () => {
        const response = await axios.get(`https://financialmodelingprep.com/api/v3/sector-performance?apikey=91c950cb2afdc944512490e8ae2113cc`)
       
        console.log(response.data)
        setSector(response.data)
        }
        getSector()
    }, [])
 
   //  if (sector.changePercentage.includes('-')){
   //    sector.changePercentage.style.color = 'red'
   //  } else {
   //    sector.changePercentage.style.color = 'green'
   //  }


    //we need to see the data
    //also create a guard operator
    //so if data takes a few seconds 
    //site doesnt break

    if (!Home) {
        return <h2> Loading please wait</h2>
    } else {
        return (
        <div className='storyGrid'>
            
            {/* <div className='story0'>
                <a href={Home[0].url}target='_blank' className='alink'>
                <h1 className='storyTitle'>{Home[0].title}</h1>
                <h3 className='storyInfo'> {Home[0].site}, {Home[0].publishedDate}, {Home[0].symbol}</h3>
               <img className='storyImg0' src={Home[0].image}></img></a> 
            
            
             </div> */}
             <div className='story1'>
             <a href={Home[1].url}target='_blank' className='alink1'>
             <h1 className='storyTitle1'>{Home[1].title}</h1>
                <h3 className='storyInfo1'>{Home[1].site}, {Home[1].publishedDate},     {Home[1].symbol}</h3>
                <img className='storyImg1' src={Home[1].image}></img>
                <p className='storyText'>{Home[1].text}</p></a>
                
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

               <div className='sectorReport'>
                  <h1 className='sectorTitle'>Daily Sector Report</h1>
                  <h2>{sector[11].sector}: {sector[11].changesPercentage}</h2>
                  <h2>{sector[7].sector}: {sector[7].changesPercentage}</h2>
                  <h2>{sector[6].sector}: {sector[6].changesPercentage}</h2>
                  <h2>{sector[10].sector}: {sector[10].changesPercentage}</h2>
                  <h2>{sector[8].sector}: {sector[8].changesPercentage}</h2>
                  <h2>{sector[5].sector}: {sector[5].changesPercentage}</h2>
                  <h2>{sector[4].sector}: {sector[4].changesPercentage}</h2>
                  <h2>{sector[1].sector}: {sector[1].changesPercentage}</h2>
                  <h2>{sector[3].sector}: {sector[3].changesPercentage}</h2>
                  <h2>{sector[2].sector}: {sector[2].changesPercentage}</h2>
                  <h2>{sector[9].sector}: {sector[9].changesPercentage}</h2>
               </div>
             

        </div>    
        )
    }


    

}