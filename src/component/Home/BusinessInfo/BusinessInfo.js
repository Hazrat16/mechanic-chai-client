import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'

const infosData = [
    { 
        title: 'Opening Hours',
        description: 'We are open 24X7',
        icon: faClock,
        background: 'primary',
        id:1
    },
    { 
        title: 'Visit Our Location',
        description: 'Badda, Dhaka',
        icon: faMapMarker,
        background: 'dark',
        id:2
    },
    { 
        title: 'Call Us Now',
        description: '+152720933',
        icon: faPhone,
        background: 'primary',
        id:3
    },
]

const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row">
            {
                infosData.map((info) => <InfoCard info={info} key={info.id}></InfoCard>)
            }
            </div>
        </section>
    );
};

export default BusinessInfo;