import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import './Contact.css';
const Contact = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const onSubmit = data => {
        const serviceData = {
            review: data.review,
            user:loggedInUser.name,
            imageURL: loggedInUser.photoURL,
        };
        const url = `https://protected-inlet-61515.herokuapp.com/review`;

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
       <section className="contact my-5 py-5">
           <div className="container">
               <div className="section-header text-center text-white mb-5">
                    <h1>Leave A Review Here</h1>
               </div>
               <div className="col-md-9 mx-auto">

               <form onSubmit={handleSubmit(onSubmit)}>
                        <input name="review" placeholder="Review" ref={register} className='mt-2 mb-2 w-75' style={{height:'200px'}}/>
                        <br />
                        <input type="submit" />
                    </form>
               </div>
           </div>
       </section>
    );
};

export default Contact;