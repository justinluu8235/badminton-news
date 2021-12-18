import React, { Component } from 'react';
import './Banner.css';

class Banner extends Component {
    render() {
        return (
            <section className="hero is-medium" >
                <div className="hero-body" id="banner">
                    <div className="container" id="bannerBackground">
                        <h1 className="title is-1 ">Sindhu Shakes Off Recent Tormentor</h1>
                        <h2 className="subtitle"> <br /> Pusarla V. Sindhu shook off one of her most tenacious opponents to make the quarterfinals of the TotalEnergies BWF World….</h2>
                        <a href="https://bwfworldchampionships.bwfbadminton.com/news-single/2021/12/16/sindhu-shakes-off-recent-tormentor/" className="button is-white is-small is-inverted">Read More&ensp;<i className="fad fa-chevron-right"></i></a>
                    </div>
                </div>
            </section>
        )
    }
}

export default Banner;