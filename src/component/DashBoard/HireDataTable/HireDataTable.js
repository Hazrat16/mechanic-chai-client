import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

const HireDataTable = () => {
    const [bookings, setBookings] = useState([])
    useEffect(() => {
        fetch('https://mechanic-server.vercel.app/bookings')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    return (
        <div className="container-fluid row">
            {/* <div className='col-md-2 pl-0'>
                <Sidebar/>
            </div> */}
            <div className="col-md-10">
                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th className="text-secondary text-left" scope="col">Sr No</th>
                            <th className="text-secondary" scope="col">Name</th>
                            <th className="text-secondary" scope="col">Address</th>
                            <th className="text-secondary" scope="col">Phone</th>
                            <th className="text-secondary" scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map((booking, index) =>

                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{booking.name}</td>
                                    <td>{booking.address}</td>
                                    <td>{booking.phone}</td>
                                    <td>{booking.email}</td>
                                    <td><FontAwesomeIcon icon={faCheckCircle} /></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default HireDataTable;