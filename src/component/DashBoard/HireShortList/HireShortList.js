import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const HireShortList = ({bookings}) => {
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary" scope="col">Service</th>
                <th className="text-secondary" scope="col">Date</th>
                <th className="text-secondary" scope="col">Email</th>
                <th className="text-secondary" scope="col">Confirmation</th>
                </tr>
            </thead>
            <tbody>
                {
                  bookings.map((booking, index) => 
                        
                    <tr key={index}>
                        <td>{booking.name}</td>
                        <td>{booking.date}</td>
                        <td>{booking.email}</td>
                        <td><FontAwesomeIcon icon={faCheckCircle} />Confirm Bookings</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default HireShortList;