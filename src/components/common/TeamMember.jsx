

const TeamMember = ({data}) => {
  return (
    <div className="card col-8 col-md-5 col-lg-2 p-0 border border-0 rounded-0 mx-3">
        <img src={data.img}  alt="" />
        <div className="card-body">
            <h5 className="card-title text-center">{data.name}</h5>
            <h6 className="card-subtitle text-center text-secondary ">{data.position}</h6>
        </div>

    </div>
  )
}

export default TeamMember