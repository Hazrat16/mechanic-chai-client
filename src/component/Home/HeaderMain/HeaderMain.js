import React from 'react';
import { useHistory } from 'react-router-dom';

const HeaderMain = () => {
    let history = useHistory();
    const handleHire = () =>{
        history.push('/mechanic/dashboard')
    }
    return (
        <main style={{height:'600px'}} className='row d-flex align-items-center'>
            <div className="col-md-4 offset-md-1">
                <h1 className="text-white">Best Service <br /> Starts Here</h1>
                <p className='text-danger'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero error rem quisquam eum aut cupiditate.</p>
                <button onClick={handleHire} className="btn btn-warning text-uppercase">Hire Mechanic</button>
            </div>
            <div className="col-md-6">
                <img src='https://www.pngkey.com/png/full/11-119040_28-collection-of-automotive-tools-clipart-system-mechanic.png' alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;