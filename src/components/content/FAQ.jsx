
import Cover from "../common/Cover";
import { faqData } from "../../Data/Data";
import Faq from "../common/Faq";

const FAQ = () => {
    
  return (
    <div className="container-fluid p-0 g-0">
      <Cover title={"FAQ"} dataAos="fade-up" dataAosDuration="3000"/>
      <div className="container my-3 ">
        <h1 className="text-center" data-aos="fade-right" data-aos-duration="3000">Frequently Asked Questions</h1>
        <div className="container d-flex flex-column align-items-center">
          {faqData.map((item)=>(
            <Faq key={item.id} data={item} dataAos="fade-right" dataAosDuration="3000"/>
          ))}
        </div>

       

      </div>
    </div>
  );
};

export default FAQ;
