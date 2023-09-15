import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { useEffect } from "react";
import { wcu,statData } from "../../Data/Data";
import "../../styles/content/Home.css";
import Card from "../common/Card";
import StatCard from "../common/StatCard";
import AOS from 'aos'
import 'aos/dist/aos.css'


import TestimonialSlider from "../common/TestimonialSlider";


const Home = () => {
  useEffect(()=>{
    AOS.init()
  },[])
  
  return (
    <div>
      {/* hero section */}
      <div className="hero text-white py-5 px-lg-5" data-aos="flip-down">
        <h4 className="text-uppercase fw-semibold   ms-lg-4">
          Explore opportunities
        </h4>
        <h1 className="text-uppercase fw-bold ms-lg-4 ">Visa & Immigration </h1>
        <h1 className="text-uppercase fw-bold ms-lg-4  ">Consultation</h1>
        <p className="ms-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt labore et dolore magna aliqua
        </p>
        <a
          className="btn btn-warning text-white  fw-bold mt-lg-4 ms-4"
          href="www.test.lk"
        >
          ABOUT US
        </a>
        <div className=" d-flex justify-content-center text-black">
          <div className="hero-arrows bg-white m-1">
            <ArrowBack />
          </div>
          <div className="hero-arrows bg-white m-1">
            <ArrowForward />
          </div>
        </div>
      </div>
      {/* choos us section */}
      <div className="container-fluid .bg-transparent py-md-3 my-5">
        <h4 className="text-center fs-6 text-decoration-underline text-secondary fw-semibold" data-aos="zoom-in-left">
          CHOOSE US
        </h4>
        <h1 className="text-center fs-1 fw-bold" data-aos="zoom-in-right">Why Choose Us?</h1>
        <div className="row justify-content-center">
          {wcu.map((item) => (
            <Card key={item.id} data={item} dataAos="fade-up"
            dataAosDuration="3000" />
          ))}
        </div>
      </div>
      {/* About Bridge */}
      <div className="container-fluid about-bridge py-5" data-aos="fade-up"
     data-aos-duration="3000">
        <div className="row justify-content-center ">
          <div className="col-12 col-lg-5 ms-lg-5 ps-lg-5" >
            <h4 className="text-start fs-6 text-decoration-underline text-secondary fw-semibold">
              ABOUT BRIDGE
            </h4>
            <h1 className="start fs-1 fw-bold">
             <span className="text-warning">25+</span>  Years of Your Trust and Recommendation
            </h1>
            <h3 className="fs-5 fw-bold">ISO Certified & Best Immigration Award 2018 Winner</h3>
            <p className=".text-dark fs-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <a href="www.test.lk" className="btn btn-warning text-white mb-4">
            read more
            </a>
          </div>
          <div className="col-12 col-lg-5 me-lg-5 pe-lg-5 my-auto ">
              <img src="https://s3-alpha-sig.figma.com/img/5ba5/339b/92085d75ef179d3b8ddd2ea710babae2?Expires=1694995200&Signature=iFbspVgQ1KTNfiTlxMZeS5qLi05T6Quu-46xIK1yJLZjdtvhd8ELdisk1DqUATfwjAm0gVFBOcPANrB-sZImcWFuwg5x82O07XUikxldwu6u5Ngr~d3s594vA95s8Q5byvqv1p-GfYDH6nrSW0tNhVr58vdrvdfexN0UnvIZ6smuSOGY58Gm5pMQ7HKSqHdEDnjwGbjGAMy3JaldGYpZucFkNmJHVELsSQCpf5ebwkZ2UvVPueAwt7blIX9aWN5T0tAGDuRsPGNiT4s2SX0tKIfk9-7gENfs9B6Elxyikyr5CqECaIV5j-yvMVmSBceacWOTj0z9fLLhcQZCgWLc1A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" className="img-fluid" width='100%' />
          </div>
        </div>
        <div className="row justify-content-center mt-5 mb-2 pt-md-5">
          {statData.map((item)=>(
            <StatCard key={item.id} para={item} dataAos="fade-right" dataAosDuration="3000" />
          ))}
          
          
        </div>
      </div>
      {/* Testimonials */}
      <div className="container-fluid pt-5 mt-5  " data-aos="fade-up"
     data-aos-duration="3000">
        <h4 className="text-center text-secondary text-decoration-underline text-uppercase fs-5">Testimonials</h4>
        <h1 className="text-center fs-1 fw-bold my-4">What Clients Say About Us and Our Services</h1>       
                    
          <TestimonialSlider/>
            
        
        </div>  
            
    </div>
  );
};

export default Home;
