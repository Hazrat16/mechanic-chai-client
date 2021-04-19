import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';

const AddService = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setIMageURL] = useState(null);
    const [service, setService] = useState(null);


    const onSubmit = data => {
        const serviceData = {
            name: data.name,
            description: data.description,
            imageURL: imageURL,
        };
        const url = `http://localhost:5000/addService`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
            .then(res => console.log('server side response', res))
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '6ef39c482b09320ba0310504b60d01a5');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setIMageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    return (
        <div className="container-fluid row">
            <div className="col-md-2 pl-0">
                <Sidebar />
            </div>
            <div className="col-md-10 pt-5">
                <div style={{ paddingLeft: '200px' }}>
                    <h1>Add Service here</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input name="name" placeholder="Service" ref={register} className='w-75'/>
                        <br />
                        <input name="description" placeholder="Description" ref={register} className='mt-2 mb-2 w-75'/>
                        <br />
                        <input name="exampleRequired" type="file" onChange={handleImageUpload} className='mb-2'/>
                        <br />
                        <input type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;