import React, { Component } from 'react';
import './Parallax.css';
import Banner from './home-page-component/Banner';
import News from './home-page-component/News';
import Schedule from './home-page-component/Schedule'
import Navbar from './home-page-component/Navbar'
import Footer from './home-page-component/Footer';

class Parallax extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Banner />
                <News />
                <Schedule />
                <Footer/>
         
            </div>
        )
    }

}


export default Parallax;