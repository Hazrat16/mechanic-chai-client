import React from 'react';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Mechanic from '../Mechanic/Mechanic';
import FeaturedService from '../FeaturedService/FeaturedService';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import HireMechanic from '../HireMechanic/HireMechanic';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div className="bg-dark">
            <Header/>
            <Services/>
            <FeaturedService/>
            <Testimonials/>
            <HireMechanic/>
            <Blogs/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;