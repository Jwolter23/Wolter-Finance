import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Finance from './Finance'

export default function Main () {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/finance' element={<Finance />} />
            </Routes>
        </div>
    )
}