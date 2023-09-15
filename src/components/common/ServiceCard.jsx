

const ServiceCard = ({data, dataAos,dataAosDuration}) => {
  
  return (
    <div className=" card col-8 col-md-5 col-lg-2 p-0 rounded-0 border border-0 my-4 mx-4" data-aos={dataAos} data-aos-duration={dataAosDuration} >
    <img
      src={data.img}
      alt=""
      className="card-img-top "
      
    />
    <div className="card-body mt-0 border border-secondary-subtle border-top-0  ">
      <h5 class="card-title">{data.title}</h5>
      <p class="card-text">{data.text}
      </p>
    </div>
  </div>
  )
}

export default ServiceCard