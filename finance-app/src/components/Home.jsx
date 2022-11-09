import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Home () {

    //create a state for our data 

    const [Home, setHome] =useState(null)

    //we need to call an axios function
    useEffect(() => {
        
        const getHome = async () => {
        const response = await axios.get(`https://financialmodelingprep.com/api/v3/stock_news?limit=25&apikey=${process.env.REACT_APP_FMP_KEY}`)
        
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
        const response = await axios.get(`https://financialmodelingprep.com/api/v3/sector-performance?apikey=${process.env.REACT_APP_FMP_KEY}`)
       
        console.log(response.data)
        setSector(response.data)
        }
        getSector()

      //   setInterval(getSector, 5000)

    }, [])



    const [ipo, setIPO] =useState(null)
 
    useEffect(() => {
       
        const getIPO = async () => {
        const response = await axios.get(`https://financialmodelingprep.com/api/v3/ipo_calendar?from=2022-11-01&to=2022-12-31&apikey=${process.env.REACT_APP_FMP_KEY}`)
       
        console.log(response.data)
        setIPO(response.data)
        }
        getIPO()


    }, [])

    
   
 
    //we need to see the data
    //also create a guard operator
    //so if data takes a few seconds 
    //site doesnt break

    if (!Home || !sector || !ipo) {
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
                        <h3 className='sectorTitleChange'>{sector[11].sector}:</h3> 
                        <h3 className={sector[11].changesPercentage.includes('-') ? 'negative' : 'positive'}>{sector[11].changesPercentage}</h3>
                     </div>
                     
                     <div className='sector11'>
                        <h3 className='sectorTitleChange'>{sector[7].sector}: </h3>
                        <h3 className={sector[7].changesPercentage.includes('-') ? 'negative' : 'positive'}>{sector[7].changesPercentage}</h3>
                     </div>

                     <div className='sector11'>
                        <h3 className='sectorTitleChange'>{sector[6].sector}: </h3>
                        <h3 className={sector[6].changesPercentage.includes('-') ? 'negative' : 'positive'}>{sector[6].changesPercentage}</h3>
                     </div>

                     <div className='sector11'>
                        <h3 className='sectorTitleChange'>{sector[10].sector}:</h3>
                        <h3 className={sector[10].changesPercentage.includes('-') ? 'negative' : 'positive'}> {sector[10].changesPercentage}</h3>
                     </div>

                     <div className='sector11'>
                        <h3 className='sectorTitleChange'>{sector[8].sector}: </h3>
                        <h3 className={sector[8].changesPercentage.includes('-') ? 'negative' : 'positive'}>{sector[8].changesPercentage}</h3>
                     </div>

                     <div className='sector11'>
                        <h3 className='sectorTitleChange'>{sector[5].sector}: </h3>
                        <h3 className={sector[5].changesPercentage.includes('-') ? 'negative' : 'positive'}>{sector[5].changesPercentage}</h3>
                     </div>

                     <div className='sector11'>
                        <h3 className='sectorTitleChange'>{sector[4].sector}: </h3>
                        <h3 className={sector[4].changesPercentage.includes('-') ? 'negative' : 'positive'}>{sector[4].changesPercentage}</h3>
                     </div>

                     <div className='sector11'>
                        <h3 className='sectorTitleChange'>{sector[1].sector}:</h3>
                        <h3 className={sector[1].changesPercentage.includes('-') ? 'negative' : 'positive'}> {sector[1].changesPercentage}</h3>
                     </div>

                     <div className='sector11'>
                        <h3 className='sectorTitleChange'>{sector[3].sector}: </h3>
                        <h3 className={sector[3].changesPercentage.includes('-') ? 'negative' : 'positive'}>{sector[3].changesPercentage}</h3>
                     </div>

                     <div className='sector11'>
                        <h3 className='sectorTitleChange'>{sector[2].sector}: </h3>
                        <h3 className={sector[2].changesPercentage.includes('-') ? 'negative' : 'positive'}>{sector[2].changesPercentage}</h3>
                     </div>

                     <div className='sector11'>
                        <h3 className='sectorTitleChange'>{sector[9].sector}: </h3>
                        <h3 className={sector[9].changesPercentage.includes('-') ? 'negative' : 'positive'}>{sector[9].changesPercentage}</h3>
                     </div>

                     <div className='sector11'>
                        <h3 className='sectorTitleChange'>{sector[0].sector}:</h3> 
                        <h3 className={sector[0].changesPercentage.includes('-') ? 'negative' : 'positive'}>{sector[0].changesPercentage}</h3>
                     </div>
                  </div>
                  
                     
                     <div className='ipoColumn'>
                        <h1 className='ipoTitle'>Upcoming IPO's</h1>

                        <div className='ipo1'>
                        <h2>{ipo[0].company}: {ipo[0].symbol}</h2>
                        <h3>{ipo[0].date} {ipo[0].exchange}</h3>
                        <h3>{ipo[0].priceRange}</h3>
                        </div>

                        <div className='ipo2'>
                        <h2>{ipo[5].company}: {ipo[5].symbol}</h2>
                        <h3>{ipo[5].date} {ipo[5].exchange}</h3>
                        <h3>{ipo[5].priceRange}</h3>
                        </div>

                        <div className='ipo3'>
                        <h2>{ipo[12].company}: {ipo[12].symbol}</h2>
                        <h3>{ipo[12].date} {ipo[12].exchange}</h3>
                        <h3>{ipo[12].priceRange}</h3>
                        </div>

                        <div className='ipo4'>
                        <h2>{ipo[17].company}: {ipo[17].symbol}</h2>
                        <h3>{ipo[17].date} {ipo[12].exchange}</h3>
                        <h3>{ipo[17].priceRange}</h3>
                        </div>

                        <div className='ipo4'>
                        <h2>{ipo[18].company}: {ipo[18].symbol}</h2>
                        <h3>{ipo[18].date} {ipo[18].exchange}</h3>
                        <h3>{ipo[18].priceRange}</h3>
                        </div>
                        
                     
                  </div>

         </div> 
       
        )
    }


    

}