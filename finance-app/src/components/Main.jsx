import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Finance from './Finance'
import Company from './Company'
import Stocks from './Stocks'
import CompanyDetails from './CompanyDetails'

export default function Main (props) {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/finance' element={<Finance initialState={props.initialState}               handleChange={props.handleChange} handleSubmit={props.handleSubmit} formState={props.formState}/>} />
                <Route path='/company' element={<Company company={props.company} alph={props.alph}/>} />
                <Route path='/company/:index' element={<CompanyDetails company={props.company} alph={props.alph}/>} />
                <Route path='/stocks' element={<Stocks />} />
            </Routes>
        </div>
    )
}