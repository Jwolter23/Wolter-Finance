import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const CompanyDetails = (props) => {

    let { index } = useParams()

    const [companyDetail, setCompanyDetail] = useState('')

    

    useEffect(() => {
        let selectedCompany = props.company[index]
        setCompanyDetail(selectedCompany)
        
    }, [props.company, index])
    return companyDetail ? (
        <div>
        <div className='specificCompDetail'>
            <h1 className='compDetailTitle'>{companyDetail.symbol}: {companyDetail.companyName}</h1>
            <div class='compDetailImgDiv'><img className='compDetailImg'src={companyDetail.image} alt=''></img></div>
            <h3>{companyDetail.description}</h3>
            <h3>Market Cap: {companyDetail.mktCap}</h3>
            <h3>Current Price: {companyDetail.price}</h3>
            <h3>Range: {companyDetail.range}</h3>
            
        </div>
        <div className='backButtonWrap'>
                <button><Link to='/company'>Back</Link></button>
            </div>
        </div>
            
       
    ) : (<h1>Loading...</h1>)
}

export default CompanyDetails