import { Link } from 'react-router-dom'

export default function Nav () {
    return (
        <div className='navLinks'>
            <Link to='/' className='linkz'>Home</Link>
            <Link to ='/company' className='linkz'>Company</Link>
            <Link to ='/finance' className='linkz'>Stock Search</Link>
            <Link to ='/stocks' className='linkz'>Stocks</Link>
            
            
        </div>
    )
}