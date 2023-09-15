import {testimonials} from '../../Data/Data'
import Cover from '../common/Cover'
import TestimonialCard from '../common/TestimonialCard'


const Testimonials = () => {
  return (
    <div className='container-fluid p-0 m-0 g-0'>
        <Cover title={'Testimonials'} dataAos="fade-up" dataAosDuration="3000" />
        <h1 className='text-center pt-5 mt-3 mb-2'data-aos="fade-right" data-aos-duration="3000" > Testimonials</h1>


        <div className="container d-flex flex-column align-items-center my-5 pb-5">
            {testimonials.map((item)=>(
             <TestimonialCard key={item.id} data={item}  dataAos="fade-up" dataAosDuration="3000"/>   
            ))}
          
        </div>
        
        
    </div>
  )
}

export default Testimonials