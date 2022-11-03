import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Finance from './Finance'
import Company from './Company'

export default function Main () {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/finance' element={<Finance />} />
                <Route path='/company' element={<Company />} />
            </Routes>
        </div>
    )
}