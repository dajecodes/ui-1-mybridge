import Cover from "../common/Cover";
import ServiceCard from "../common/ServiceCard";
import {serviceData} from "../../Data/Data"
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css'

const Services = () => {
  useEffect(()=>{
    AOS.init()
  })
  return (
    <div>
      <Cover title={"Services"} dataAos="fade-up" dataAosDuration="3000" />
      <div className="container py-5 my-5">
        <h1 className=""data-aos="fade-right" data-aos-duration="3000">Our Services</h1>
        <div className="row  p-0 d-flex justify-content-between">
            {serviceData.map((item)=>(
                 <ServiceCard key={item.id} data={item} dataAos="fade-up" dataAosDuration="3000"  />
            ))}
        
         
        </div>
      </div>
    </div>
  );
};

export default Services;
