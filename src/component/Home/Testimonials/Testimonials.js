import React from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css'


const testimonialData = [
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'John Harry',
        from : 'California',
        img : 'https://www.vhv.rs/dpng/d/414-4146986_man-animation-png-businessman-clipart-transparent-background-png.png',
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Ema Gomez',
        from : 'California',
        img : 'https://www.vhv.rs/dpng/d/414-4146986_man-animation-png-businessman-clipart-transparent-background-png.png',
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Kia Farari',
        from : 'California',
        img : 'https://www.vhv.rs/dpng/d/414-4146986_man-animation-png-businessman-clipart-transparent-background-png.png',
    }
]

const Testimonials = () => {
    return (
        <section className="testimonials my-5 py-5">
           <div className="container">
               <div className="section-header">
                   <h5 className="text-brand text-uppercase">Testimonial</h5>
                   <h1 className='text-white'>Our Client's <br/> Reviews </h1>
               </div>
               <div className="card-deck mt-5">
                    {
                        testimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name}/>)
                    }
                </div>
           </div>
       </section>
    );
};

export default Testimonials;