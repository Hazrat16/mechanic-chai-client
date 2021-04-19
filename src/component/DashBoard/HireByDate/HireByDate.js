import React, { useEffect, useState } from 'react';
import HireShortList from '../HireShortList/HireShortList';

const HireByDate = () => {
    const [bookings, setBookings] = useState([])
    useEffect(() => {
        fetch('https://protected-inlet-61515.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    return (
        <div>
            <h2 className="text-brand text-center">Bookings</h2>
            {
                bookings.length ?
                 <HireShortList bookings={bookings} key={bookings._id}></HireShortList>
                :
                <div className="p-5">
                    <h4 className="lead text-center">No Bookings for this Date</h4>
                </div>
            }
        </div>
    );
};

export default HireByDate;