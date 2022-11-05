import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'


function App() {


  const initialState = {
    search: '',
  }
  
  

  const [formState, setFormState] = useState(initialState)
  
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formState)
    setFormState(initialState)
  }
  
  const handleChange = (event) => {
    setFormState({...formState, [event.target.id]: event.target.value})
  }







const multiCo = [
  'AAPL','AMZN','ROKU','IBM','TSLA','MSFT','GOOGL','BRK.A','NVDA','TSM','META','UNH',
  'JNJ','V','WMT','XOM','JPM','CVX','LLY','PG','MA','TCEHY','BAC','HD','PFE','KO','MRK','ABBV','PEP','MCD'
]

let alph = () => {
  setCompany([...company].sort((a, b) => a.item > b.item ? 1 : -1 ))
} 

  const [company, setCompany] =useState(null)

  //we need to call an axios function
  useEffect(() => {
      
      const getCompany = async () => {
      const response = await axios.get(`https://financialmodelingprep.com/api/v3/profile/${multiCo}?apikey=91c950cb2afdc944512490e8ae2113cc`)
     
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
        <Main company={company}
              alph={alph}
              initialState={initialState}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              formState={formState}/>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
