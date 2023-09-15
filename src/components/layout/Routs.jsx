import { Route,Routes,BrowserRouter } from "react-router-dom";
import "../../styles/layout/Routs.css";
import Testimonials from "../content/Testimonials";
import AboutUs from "../content/AboutUs";
import FAQ from "../content/FAQ";
import Services from "../content/Services";
import Home from "../content/Home";
import ContactUs from "../content/ContactUs";
import Header from "./Header";
import Footer from "./Footer";

const Routs = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/faq" element={<FAQ/>}/>
        <Route path="/testimonials" element={<Testimonials/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default Routs;
