import '../../styles/common/TestirmonialCard.css'


const TestirmonialCard = ({data}) => {
    
// col-12 col-md-5 col-lg-3
  return (
    <div className="card border border-0  ">
              <div className="d-flex m-4">
                <img src= {data.img} alt="user" className="mt-2" />
                 <div className="ms-4 me-auto">
                <h5 className="card-title mb-3">{data.name}</h5>
                <h6 className="card-subtitle text-muted">{data.type}</h6>
              </div>
              <img src="https://s3-alpha-sig.figma.com/img/20f0/a5f9/774fe0d2072b1beabbb203811e7a85d0?Expires=1695600000&Signature=B0oF9vLRklMnG5uGoKMn6XFnMeqfonpAM30-Mh7~SbQcy0AADN8t22KgVp6VMHbXO3dJz4IYqugel7GKE1MJftLtr7Nu9a6QGzNb24Pb76RWvqD5cvAUJn6VaI6Hphpq-geSFmQtlchY0Ss1k~nRZBAgRAbHirH1MIv6WfnLum6rNNhBG2VrEdv4DQLzAUwrE3vYFky0x-KdOAjTuiveZfDKIqz4uDbZNXrCStUO6f453~DoAfWsCx-ZngvPQAmYiLdEuRJHWFQ35xaRA~8BHojCyH9k1L7AEtrl4OAG6YU54YJedoRGhzeZEeEGLET7cAwNZl3qRMp5hffJ5JcMdA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt=""
              className="img-fluid col-2" width='100%'/>
              </div>
             
              <div className="card-body">
                
                
                <p className="card-text">{data.text}</p>
              </div>
            </div>
  )
}

export default TestirmonialCard