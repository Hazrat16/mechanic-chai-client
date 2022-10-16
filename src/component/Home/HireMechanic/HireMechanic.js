import React from 'react';
import './HireMechanic.css'

const MakeAppointment = () => {
    return (
        <section className="make-appointment">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        {/* <img src='https://www.vhv.rs/dpng/d/414-4146986_man-animation-png-businessman-clipart-transparent-background-png.png' alt=""/> */}
                    </div>
                    <div className="col-md-7 py-5">
                        <h5 className=" text-uppercase text-white ">Hire</h5>
                        <h1 className="my-4">Want A Technician <br/> Today?</h1>
                        <p className="text-white pt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt hic totam in rem excepturi iste doloremque neque! Dolore, non nam!</p>
                        <button className="btn btn-warning">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;