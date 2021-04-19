import React from 'react';

const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className='row d-flex align-items-center'>
            <div className="col-md-4 offset-md-1">
                <h1 className="text-white">Your New Smile <br /> Starts Here</h1>
                <p className='text-danger'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero error rem quisquam eum aut cupiditate.</p>
                <button className="btn btn-warning">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6">
                <img src='https://www.pngkey.com/png/full/11-119040_28-collection-of-automotive-tools-clipart-system-mechanic.png' alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;