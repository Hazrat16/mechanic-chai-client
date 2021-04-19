import React from 'react';

const FeaturedService = () => {
    return (
        <div className="features-service pb-0 pb-md-5 my-5 bg-light">
            <div className="container mb-5">
                <div className=" row mb-5">
                    <div className="col-md-5 mb-4 m-md-0">
                        <img className='img-fluid w-75' src='https://i.pinimg.com/474x/29/80/18/29801830e59a3f319e8e8f0d7d9fd69d.jpg' alt="" />
                    </div>
                    <div className="col-md-7 align-self-center my-5">
                        <h2>Best Technician <br /> on Your Terms</h2>
                        <p className="text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam inventore aliquid eaque velit sed assumenda quos, laudantium optio sequi odit alias nulla distinctio. Inventore explicabo commodi quia fugit earum odio ex doloremque. Id, quasi! Esse adipisci possimus inventore repellendus quae.</p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedService;