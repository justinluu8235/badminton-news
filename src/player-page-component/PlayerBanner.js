import React, { Component } from 'react';
import './PlayerBanner.css';


class PlayerPage extends Component {
    render() {
        return (
            <section className="hero is-medium" >
                <div className="hero-body" id="playerBanner" title="player-banner">
                    <div className="container" >
                        <h1 className="title is-1 " id="playerBannerText" title="player-ban-text">Badminton</h1>
                    </div>
                </div>
            </section>
        )
    }
}

export default PlayerPage;