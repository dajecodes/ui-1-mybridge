

const StatCard = ({para,dataAos,dataAosDuration}) => {
  return (
    <div className="card col-7 col-md-2  m-2 statCard " style={{borderRadius:0}} data-aos={dataAos} data-aos-duration={dataAosDuration}>
                <div className="card-body mx-3 my-4">
                  <h1 className="card-title text-warning text-center fw-bold  ">{para.count}</h1>
                  <p className="card-text text-center fs-4 fw-semibold">{para.text}</p>
                </div>
                
              </div>
  )
}

export default StatCard