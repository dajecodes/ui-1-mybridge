
import '../../styles/common/Card.css'
import React from 'react'

const Card = ({data, dataAos,dataAosDuration}) => {
  return (
   
        <div className="card col-12 col-md-4 col-lg-3 m-2 card-coustum" data-aos={dataAos} data-aos-duration={dataAosDuration} style={{borderRadius:0,border:'none'}} >
                <div className="card-body">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text">{data.text}.</p>
                </div>
                
              </div>
    
  )
}

export default Card