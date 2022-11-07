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
 
    //we need to see the data
    //also create a guard operator
    //so if data takes a few seconds 
    //site doesnt break

    if (!Home || !sector) {
        return <h2> Loading please wait</h2>
    } else {
        return (
        <div className='storyGrid'>
             <div className='story1'>
               <a href={Home[1].url}target='_blank' className='alink1'>
                  <h1 className='storyTitle1'>{Home[1].title}</h1>
                  <h3 className='storyInfo1'>{Home[1].site}, {Home[1].publishedDate},     {Home[1].symbol}</h3>
                  <img className='storyImg1' src={Home[1].image}></img>
                  <p className='storyText'>{Home[1].text}</p>
                </a>
             </div> 

             <div className='story2'>
             <a href={Home[2].url}target='_blank' className='alink'>
                  <h1 className='storyTitle'>{Home[2].title}</h1>
                  <h3 className='storyInfo'>{Home[2].site},  {Home[2].publishedDate},    {Home[2].symbol}</h3>
                  <img className='storyImg' src={Home[2].image}></img>
                </a>
             </div>

             <div className='story3' >
               <a href={Home[3].url}target='_blank' className='alink'>
                  <h1 className='storyTitle'>{Home[3].title}</h1>
                  <h3 className='storyInfo'>{Home[3].site},  {Home[3].publishedDate},    {Home[3].symbol}</h3>
                  <img className='storyImg' src={Home[3].image}></img>
                </a>
             </div> 

             <div className='story4'>
               <a href={Home[4].url}target='_blank' className='alink'>
                  <h1 className='storyTitle'>{Home[4].title}</h1>
                  <h3 className='storyInfo'>{Home[4].site},  {Home[4].publishedDate},    {Home[4].symbol}</h3>
                  <img className='storyImg' src={Home[4].image}></img>
               </a>
             </div> 

             <div className='story5'>
               <a href={Home[5].url}target='_blank' className='alink'>
                  <h1 className='storyTitle'>{Home[5].title}</h1>
                  <h3 className='storyInfo'>{Home[5].site},  {Home[5].publishedDate},    {Home[5].symbol}</h3>
                  <img className='storyImg' src={Home[5].image}></img>
               </a>
             </div> 

             <div className='story6'>
               <a href={Home[6].url}target='_blank' className='alink'>
                  <h1 className='storyTitle'>{Home[6].title}</h1>
                  <h3 className='storyInfo'>{Home[6].site},  {Home[6].publishedDate},    {Home[5].symbol}</h3>
                  <img className='storyImg' src={Home[6].image}></img>
                </a>
             </div> 

               <div className='sectorReport'>
                  <h1 className='sectorTitle'>Daily Sector Report</h1>

                  <div className='sector11'>
                     <h2 className='sectorTitleChange'>{sector[11].sector}:</h2> 
                     <h2 className={sector[11].changesPercentage.includes('-') ? 'negative' : 'positive'}>{sector[11].changesPercentage}</h2>
                  </div>
                  
                  <div className='sector11'>
                     <h2 className='sectorTitleChange'>{sector[7].sector}: </h2>
                     <h2 className={sector[7].changesPercentage.includes('-') ? 'negative' : 'positive'}>{sector[7].changesPercentage}</h2>
                  </div>

                  <div className='sector11'>
                     <h2 className='sectorTitleChange'>{sector[6].sector}: </h2>
                     <h2 className={sector[6].changesPercentage.includes('-') ? 'negative' : 'positive'}>{sector[6].changesPercentage}</h2>
                  </div>

                  <div className='sector11'>
                     <h2 className='sectorTitleChange'>{sector[10].sector}:</h2>
                     <h2 className={sector[10].changesPercentage.includes('-') ? 'negative' : 'positive'}> {sector[10].changesPercentage}</h2>
                  </div>

                  <div className='sector11'>
                     <h2 className='sectorTitleChange'>{sector[8].sector}: </h2>
                     <h2 className={sector[8].changesPercentage.includes('-') ? 'negative' : 'positive'}>{sector[8].changesPercentage}</h2>
                  </div>

                  <div className='sector11'>
                     <h2 className='sectorTitleChange'>{sector[5].sector}: </h2>
                     <h2 className={sector[5].changesPercentage.includes('-') ? 'negative' : 'positive'}>{sector[5].changesPercentage}</h2>
                  </div>

                  <div className='sector11'>
                     <h2 className='sectorTitleChange'>{sector[4].sector}: </h2>
                     <h2 className={sector[4].changesPercentage.includes('-') ? 'negative' : 'positive'}>{sector[4].changesPercentage}</h2>
                  </div>

                  <div className='sector11'>
                     <h2 className='sectorTitleChange'>{sector[1].sector}:</h2>
                     <h2 className={sector[1].changesPercentage.includes('-') ? 'negative' : 'positive'}> {sector[1].changesPercentage}</h2>
                  </div>

                  <div className='sector11'>
                     <h2 className='sectorTitleChange'>{sector[3].sector}: </h2>
                     <h2 className={sector[3].changesPercentage.includes('-') ? 'negative' : 'positive'}>{sector[3].changesPercentage}</h2>
                  </div>

                  <div className='sector11'>
                     <h2 className='sectorTitleChange'>{sector[2].sector}: </h2>
                     <h2 className={sector[2].changesPercentage.includes('-') ? 'negative' : 'positive'}>{sector[2].changesPercentage}</h2>
                  </div>

                  <div className='sector11'>
                     <h2 className='sectorTitleChange'>{sector[9].sector}: </h2>
                     <h2 className={sector[9].changesPercentage.includes('-') ? 'negative' : 'positive'}>{sector[9].changesPercentage}</h2>
                  </div>
               </div>
             

        </div>    
        )
    }


    

}