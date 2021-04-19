import React, { useEffect, useState } from 'react';
import HireDataTable from '../../HireDataTable/HireDataTable';
import Sidebar from '../../Sidebar/Sidebar';

const AllClient = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch('https://protected-inlet-61515.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => {
                setBookings(data)
                console.log(data);
            })
    }, [])

    return (
        <div className="container-fluid row " >
            <Sidebar />
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">All Clients</h5>
                <HireDataTable bookings={bookings} />
            </div>
        </div>
    );
};

export default AllClient;