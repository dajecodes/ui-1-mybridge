import React from 'react'

const TestimonialCard = ({data,dataAos,dataAosDuration}) => {
  return (
    <div className="card col-8 round-0 my-2" data-aos={dataAos} data-aos-duration={dataAosDuration}>
    <div className="card-header round-0">
        <div className='d-flex justify-content-start'>
            <div className='col-3'>{"Name - "+data.name}</div>
            <div className='col-3'>{"Country - "+data.country}</div>
        </div>
    </div>
    <div className="card-body round-0">
        <p className="catd-text">{data.text}</p>
    </div>
</div> 
  )
}

export default TestimonialCard