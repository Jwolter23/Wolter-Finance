import { Link } from 'react-router-dom'

export default function Nav () {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to ='/finance'>Finance</Link>
            <Link to ='company'>Company</Link>
            <Link to ='stocks'>Stocks</Link>
        </div>
    )
}