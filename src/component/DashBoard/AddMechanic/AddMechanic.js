import axios from 'axios';
import React, { useRef, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const containerStyle = {
    backgroundColor: '#F4FDFB',
    height: '100%'
}

const AddMechanic = () => {
    const [info,setInfo] = useState({});
    const [file,setFile] = useState(null);
    const form= useRef(null)

    const handleSubmit = (e) => {
        const formData = new FormData( form.current)
        console.log(info);
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);
        console.log(formData);

        axios.post('https://protected-inlet-61515.herokuapp.com/addADoctor', {
            body: formData
        })
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
            e.preventDefault();
    }

    const handleBlur = (e) => {
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.value;
        setFile(newFile);
    }
    return (
        <section style={containerStyle} className="container-fluid row">
                <Sidebar />
                <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Add a Doctor</h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Name</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Upload a image</label>
                        <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                    </div>
                    {/* <input type='submit' value="Submit"   className="btn btn-primary"></input> */}
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddMechanic;