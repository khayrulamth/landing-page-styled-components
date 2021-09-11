import React, { useState } from 'react';
import Footer from '../components/Footer/Footer';
import Hero from '../components/HeroSection/Hero';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data';
import Info from '../components/InfoSection/Info';
import Navbar from '../components/Navbar/Navbar';
import Services from '../components/Services/Services';
import Sidebar from '../components/Sidebar/Sidebar';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () =>{
        setIsOpen(!isOpen);
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <Hero></Hero>
            <Info {...homeObjOne}></Info>
            <Info {...homeObjTwo}></Info>
            <Services></Services>
            <Info {...homeObjThree}></Info>
            <Footer></Footer>
        </>
    );
};

export default Home;