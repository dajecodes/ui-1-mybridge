import { useEffect, useState } from "react";
import { testimonials } from "../../Data/Data";
import TestirmonialCard from "./TestirmonialCard";
import '../../styles/common/TestimonialSlider.css'

const TestimonialSlider = () => {
  const createSlides = (noOfCards, cardClassName) => {
    const slidesData = [];
    const slideIndicator = [];

    const noOfSlieds = Math.ceil(testimonials.length / noOfCards) + 1;
    for (let i = 1; i < noOfSlieds; i++) {
      const startIndex = (i - 1) * noOfCards;
      const endIndex = startIndex + noOfCards;
      const tempdata = testimonials.slice(startIndex, endIndex);
      

      slidesData.push(
        <>
          <div className={`carousel-item ${startIndex < 1 ? "active" : ""}`}>
            <div className="d-flex justify-content-center">
            {tempdata.map((item) => (
              <div className={cardClassName+" mx-3"}>
                <TestirmonialCard key={item.id} data={item} />
              </div>
            ))}
            </div>
            <div style={{height:'10vh'}}></div>
          </div>
        </>
      );
      slideIndicator.push(
        <button
          type="button"
          data-bs-target="#testimonialSlider"
          data-bs-slide-to={i-1}
          className={startIndex < 1 ? "active" : ""}
          aria-current={i === 1 ? "true" : "false"}
          aria-label={"Slide " + i}
        ></button>
      );
    }

    return [slideIndicator, slidesData];
  };

  const createSlider = (width) => {
    let sliderData = [];
    if (width >= 992) {
      sliderData=createSlides(3, "col-lg-3");
    } else if (width >= 768) {
      sliderData=createSlides(2, "col-md-5");
    } else if (width >= 576) {
      sliderData=createSlides(1, "col-sm-8");
    } else {
      sliderData=createSlides(1, "col-12");  
      }
    return(
        <div id="testimonialSlider" className="carousel carousel-dark slide">
  <div className="carousel-indicators">
   {sliderData[0]}
  </div>
  <div className="carousel-inner">
   {sliderData[1]}
  </div>
 
</div>
    );

  };
  const [slider, setSlider] = useState(createSlider(window.innerWidth));

  useEffect(() => {
    const windowResize = () => {
      setSlider(createSlider(window.innerWidth));
    };
    window.addEventListener("resize", windowResize);
    return () => {
      window.removeEventListener("resize", windowResize);
    };
  });
  
  return (
    <div className="row">
        {slider}  
    </div>
  );
};

export default TestimonialSlider;
