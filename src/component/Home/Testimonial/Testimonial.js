import React from 'react';

const Testimonial = ({testimonial}) => {

    // console.log(testimonial);
    return (
        <div className="card shadow-sm">
            <div className="card-body">
                <p className="card-text text-center">{testimonial.review}</p>
            </div>
            <div className="card-footer d-flex  align-items-center">
                <img className="mx-3" src={testimonial.imageURL} alt="" width="60"/>
                <div>
                    <h6 className="text-primary">{testimonial.user}</h6>
                    <p className="m-0">{testimonial.from}</p>
                </div>
            </div>
       </div>
    );
};

export default Testimonial;