import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {


  const [company, setCompany] =useState(null)

  //we need to call an axios function
  useEffect(() => {
      
      const getCompany = async () => {
      const response = await axios.get(`https://financialmodelingprep.com/api/v3/profile/AAPL?apikey=91c950cb2afdc944512490e8ae2113cc`)
      
      console.log(response.data)
       //we need to set state of our data
      setCompany(response.data)

      //     console.log(company)
      // console.log(company['Meta Data'])
      }
      getCompany()
  }, [])






  return (
    <div className="App">
      <div>
        <Header />
      </div>

      <div>
        <Main company={company}/>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
