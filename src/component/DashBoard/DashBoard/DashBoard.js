import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import HireByDate from '../HireByDate/HireByDate';
import Sidebar from './../Sidebar/Sidebar';
import ProcessPayment from './../ProcessPayment/ProcessPayment';
import { UserContext } from '../../../App';
import { useContext } from 'react';

const containerStyle = {
    backgroundColor: '#F4FDFB',
    height: '100%',
    position: 'absolute'
}

const DashBoard = () => {
    // const {id} = useParams()
    // console.log(id);
    let history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser);
    const { register, handleSubmit, watch, errors } = useForm();
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [bookings, setBookings] = useState(null);
    const handleDateChange = date => {
        console.log(date);
        setSelectedDate(date);
    }
    const [bookData, setBookData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/bookings')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    // useEffect(() => {
    //     fetch(`http://localhost:5000/service/${id}`, {
    //         method: 'POST',
    //         headers: { 'Content-type': 'application/json' },
    //         body: JSON.stringify({ date: selectedDate })
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             setBookings(data);
    //             console.log(data);
    //         })

    // }, [selectedDate])
    const onSubmit = data => {
        setBookData(data);
    };

    const handlePaymentSuccess = paymentId => {
        const bookingData = {
            name: bookData.name,
            email: bookData.email,
            address: bookData.address,
            phone: bookData.phone,
            date: bookData.date,
            bookingsData: bookData,
            ...loggedInUser,
            paymentId

        };
        // const url = `http://localhost:5000/bookings`;



        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })
            .then(res =>res.json())
            .then(data => {
                console.log('server side response', data)
                if (data) {
                    alert("Your order placed successfully")
                }
            })
    }


    return (
        <section>
            <div style={containerStyle} className="container-fluid row ">
                <div className="col-md-2 pl-0">
                    <Sidebar />
                </div>
                <div className="col-md-5 p-5">
                    {/* <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    /> */}
                    <div className="pl-0 pt-3">
                        <div style={{ display: bookData ? 'none' : 'block' }}>
                            <h1>Take Service from Here</h1>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input name="name" placeholder="Service" ref={register} className='w-75 mb-2' />
                                <br />
                                <input name="email" placeholder="Email" ref={register} className='w-75 mb-2' />
                                <br />
                                <input name="address" placeholder="Address" ref={register} className='w-75 mb-2' />
                                <br />
                                <input name="phone" placeholder="Phone" ref={register} className='w-75 mb-2' />
                                <br />
                                <input name="date" placeholder="Date DD/MM/YYYY" ref={register} className='mb-2 w-75' />
                                <br />
                                {/* <button onClick={handleMakePayment}>Submit</button> */}
                                <input type="submit" />
                            </form>
                        </div>
                        <div>
                            <div style={{ display: !bookData ? 'none' : 'block' }} className="col-md-6">
                                Pay for Orders
                            <ProcessPayment handlePayment={handlePaymentSuccess} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <HireByDate bookings={bookData} key={bookData}/>
                </div>
            </div>
        </section>
    );
};

export default DashBoard;