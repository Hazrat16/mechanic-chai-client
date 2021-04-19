import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item ms-5" style={{fontWeight:'bold',fontSize:'25px'}}>
                            <Link className="nav-link text-white" aria-current="page" to="/">Mechanic Chai</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li className="nav-item ms-5">
                            <Link className="nav-link active" aria-current="page" to="#">Home</Link>
                        </li>
                        <li className="nav-item ms-5">
                            <Link className="nav-link" to="#">About</Link>
                        </li>
                        <li className="nav-item ms-5">
                            <Link className="nav-link" to="/addService">Services</Link>
                        </li>
                        <li className="nav-item ms-5">
                            <Link className="nav-link " to="#">Reviews</Link>
                        </li>
                        <li className="nav-item ms-5">
                            <Link className="nav-link " to="#">Blogs</Link>
                        </li>
                        <li className="nav-item ms-5 me-5">
                            <Link className="nav-link " to="/mechanic/dashboard">DashBoard</Link>
                        </li>
                        <li className="nav-item ms-5 me-5">
                            <Link className="nav-link " to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    );
};

export default Navbar;