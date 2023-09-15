import { useState } from "react";

const Faq = ({data,dataAos,dataAosDuration}) => {
    const [istoggle,setIsToggle]=useState(false)
  return (
    <div className="card col-9 border round-0" data-aos={dataAos} data-aos-duration={dataAosDuration}>
          <div className="card-header round-0 d-inline-flex justify-content-between align-items-center">
            <p>{data.question}</p>

            <button
              className="btn text-warning fw+bold fs-3"
              onClick={()=>{
                setIsToggle(!istoggle)
              }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={'#faq_'+data.id}
              aria-expanded="true"
              aria-controls={'faq_'+data.id}
            >
            {
                istoggle===true ?"-":"+" 
            }
             
            </button>
          </div>

          <div className="collapse round-0" id={'faq_'+data.id}>
            <div class="card card-body round-0">
             {data.answer}
            </div>
          </div>
        </div>
  )
}

export default Faq