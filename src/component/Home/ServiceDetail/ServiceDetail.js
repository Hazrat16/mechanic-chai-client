import React from 'react';
import './ServiceDetail.css'

const ServiceDetail = ({service}) => {
    // console.log(service);

    return (
        <div className="col-md-4 text-center text-white">
            <img style={{ height:'100px'}} className="hoverImages" src={service.imageURL} alt="dfsjh"/>
            <h5 className='mt-3 mb-3'>{service.name}</h5>
            <p className="text-secondary">{service.description}</p>
        </div>
    );
};

export default ServiceDetail;