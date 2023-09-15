import "../../styles/common/Cover.css";


const Cover = ({title,dataAos,dataAosDuration}) => {
  
  return (
    <div
      className="cover d-flex flex-column align-items-center justify-content-between p-0 m-0 g-0" data-aos={dataAos} data-aos-duration={dataAosDuration}>
      <div></div>
      <h1 className="text-white  fw-bold">{title}</h1>
      <div className="container-fluid glass">
        <h5 className="text-white text-center">{"Home | " + title}</h5>
      </div>
    </div>
  );
};

export default Cover;
