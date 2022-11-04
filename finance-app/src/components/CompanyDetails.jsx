import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CompanyDetails = (props) => {

    let { index } = useParams()

    const [companyDetail, setCompanyDetail] = useState('')

    useEffect(() => {
        let selectedCompany = props.company[index]
        setCompanyDetail(selectedCompany)
        console.log(companyDetail)
    }, [props.company, index])
    return companyDetail ? (
        <div className='specificCompDetail'>
            <h1>{companyDetail.symbol}: {companyDetail.companyName}</h1>
            <h3>{companyDetail.description}</h3>
            <img src={companyDetail.image}></img>
            <h3>Market Cap: {companyDetail.mktCap}</h3>
            <h3>Current Price: {companyDetail.price}</h3>
            <h3>Range: {companyDetail.range}</h3>
        </div>
    ) : (<h1>Loading...</h1>)
}

export default CompanyDetails