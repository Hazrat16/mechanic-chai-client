import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers } from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt, faUser } from '@fortawesome/free-regular-svg-icons'

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
                <li className='mb-5'>
                    <Link to="/" className="text-white">
                        <h3>Mechanic Chai</h3> 
                    </Link>
                </li>
                <li >
                    <Link to="/mechanic/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/mechanic/bookings" className="text-white">
                        <FontAwesomeIcon icon={faCalendar} /> <span>Bookings</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/mechanic/clients" className="text-white">
                        <FontAwesomeIcon icon={faUsers} /> <span>Clients</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addService" className="text-white">
                        <FontAwesomeIcon icon={faFileAlt} /> <span>Add Service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/mechanic/addAdmin" className="text-white">
                        <FontAwesomeIcon icon={faUser} /> <span>Add Admin</span>
                    </Link>
                </li>
                <li>
                    <Link to="/mechanic/setting" className="text-white" >
                      <FontAwesomeIcon icon={faCog} /> <span>Setting</span>
                    </Link>
                </li>
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;