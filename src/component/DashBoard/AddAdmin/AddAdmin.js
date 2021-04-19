import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from 'react-hook-form';

const AddAdmin = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => {
        const serviceData = {
            name: data.name,
            email: data.email
        };
        const url = `https://protected-inlet-61515.herokuapp.com/admin`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
            .then(res => console.log('server side response', res))
    };

    return (
        <div className="container-fluid row">
            <div className="col-md-2 pl-0">
                <Sidebar/>
            </div>
            <div className="col-md-10">
            <h1>Add a Admin</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input name="name" placeholder="Name" ref={register} className='w-75'/>
                        <br />
                        <input name="email" placeholder="Email" ref={register} className='mt-2 mb-2 w-75'/>
                        <br />
                        <input type="submit" />
                    </form>
            </div>
        </div>
    );
};

export default AddAdmin;