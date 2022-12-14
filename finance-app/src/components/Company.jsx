import { useNavigate } from 'react-router-dom'


const Company = (props) => {
    let navigate = useNavigate()

    const showComp = (index) => {
        navigate(`${index}`)
    }
 

    if(!props.company) {
        return <h2> Loading... Please wait.</h2>
    } else {
    
    return (
      <div>
        <div className='buttonHolderComp'>  
        <button onClick={props.alph} className='sortListA'>Sort List A to Z</button>
        </div>
    <div className='gridAlign'>
        
        <div className="grid">
            
            
            {
        props.company.map((com, index) => (
            
            <div key={index}
                    className='companyNames'>
            <h2 className="CompanyTitle" onClick={() => showComp(index)} ><img src={com.image} className='borderImg'></img> </h2>
          
            
            
        
            </div>
        ))
    }
    

        </div>
        
    </div>
    </div>
    )
}
}




export default Company