import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ServiceDetail from '../ServiceDetail/ServiceDetail';


const Services = () => {
    const [service,setService] = useState([]);
    let history = useHistory();

    useEffect(() => {
        fetch('https://mechanic-server.vercel.app/service')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    const handleClick = () =>{
        console.log(service.name);
        history.push(`/mechanic/dashboard`)
    }
    return (
        <section className="section-container" onClick={handleClick}>
            <div className="text-center mt-5">
                <h5 style={{color: '#1CC7C1'}}>Our Services</h5>
                <h2 className='text-white'>Services we provide</h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5 hoverCard">
            {
                service.map(service => <ServiceDetail service={service} key={service._id} ></ServiceDetail>)
            }
            </div>
        </div>
        </section>
    );
};

export default Services;