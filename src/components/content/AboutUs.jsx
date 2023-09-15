import Cover from "../common/Cover";
import "../../styles/content/AboutUs.css";
import StatCard from "../common/StatCard";
import { statData, testimonials,teamData } from "../../Data/Data";
import TestirmonialCard from "../common/TestirmonialCard";
import TeamMember from "../common/TeamMember";
import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'

const AboutUs = () => {
  const tempData = testimonials.slice(0, 3);
  useEffect(()=>{
    AOS.init()
  })

  return (
    <div>
      <Cover title="About Us"  dataAos="fade-up" dataAosDuration="3000"/>
      <div className="container " data-aos="fade-up" data-aos-duration="3000">
        <div className="row py-5">
          <div className="col-12 col-lg-6 my-auto  ">
            <img
              src="https://s3-alpha-sig.figma.com/img/5ba5/339b/92085d75ef179d3b8ddd2ea710babae2?Expires=1694995200&Signature=iFbspVgQ1KTNfiTlxMZeS5qLi05T6Quu-46xIK1yJLZjdtvhd8ELdisk1DqUATfwjAm0gVFBOcPANrB-sZImcWFuwg5x82O07XUikxldwu6u5Ngr~d3s594vA95s8Q5byvqv1p-GfYDH6nrSW0tNhVr58vdrvdfexN0UnvIZ6smuSOGY58Gm5pMQ7HKSqHdEDnjwGbjGAMy3JaldGYpZucFkNmJHVELsSQCpf5ebwkZ2UvVPueAwt7blIX9aWN5T0tAGDuRsPGNiT4s2SX0tKIfk9-7gENfs9B6Elxyikyr5CqECaIV5j-yvMVmSBceacWOTj0z9fLLhcQZCgWLc1A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
              className="img-fluid p-0 m-0"
              width="100%"
            />
          </div>
          <div className="col-12 col-lg-5 ">
            <h4 className="text-start fs-6 text-decoration-underline text-secondary fw-semibold" data-aos="fade-right" data-aos-duration="3000">
              ABOUT BRIDGE
            </h4>
            <h1 className="start fs-3 fw-bold" data-aos="fade-right" data-aos-duration="3000">
              <span className="text-warning">25+</span> Years of Your Trust and
              Recommendation
            </h1>
            <h3 className="fs-6 fw-bold">
              ISO Certified & Best Immigration Award 2018 Winner
            </h3>
            <p className=".text-dark fs-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid counter" data-aos="fade-up" data-aos-duration="3000"  >
        <div className="row stats justify-content-center mt-5 mb-2 pt-md-5">
          {statData.map((item) => (
            <StatCard key={item.id} para={item} />
          ))}
        </div>
      </div>
      <div className="container-fluid py-5 my-5 " data-aos="fade-up" data-aos-duration="3000">
        <h5 className="text-center text-secondary text-decoration-underline text-uppercase " data-aos="fade-right" data-aos-duration="3000">
          Testimonials
        </h5>
        <h1 className="text-center fs-1 fw-bold my-4" data-aos="fade-right" data-aos-duration="3000">
          What Clients Say About Us and Our Services
        </h1>
        <div className="row d-flex justify-content-center" data-aos="fade-up" data-aos-duration="3000">
          {tempData.map((item) => (
            <div className="col-12 col-sm-8 col-md-5 col-lg-3">
              <TestirmonialCard key={item.id} data={item} />
            </div>
          ))}
        </div>
      </div>
      <div className="container-fluid bg-white py-5" data-aos="fade-up" data-aos-duration="3000">
        <h5 className="text-center text-secondary text-decoration-underline text-uppercase " data-aos="fade-right" data-aos-duration="3000">
          Our Team
        </h5>
        <h1 className="text-center fs-1 fw-bold my-4" data-aos="fade-right" data-aos-duration="3000">
          Our Team Who are Dedicatedly Working With Us
        </h1>
        <div className="row d-flex justify-content-center mb-5 pb-5">
            {teamData.map((item)=>(
              <TeamMember key={item.id} data={item}/>  
            ))}
            
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
