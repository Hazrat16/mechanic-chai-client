import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';

const Testimonials = () => {
    const [testimonialData,setTestimonialData] = useState([]);

    useEffect(() => {
        fetch('https://mechanic-server.vercel.app/review')
            .then(res => res.json())
            .then(data => setTestimonialData(data))
    },[])
    return (
        <section className="testimonials my-5 py-5">
           <div className="container">
               <div className="section-header">
                   <h5 className="text-brand text-uppercase">Testimonial</h5>
                   <h1 className='text-white'>Our Client's <br/> Reviews </h1>
               </div>
               <div className="card-deck mt-5">
                    {
                        testimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial._id}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Testimonials;