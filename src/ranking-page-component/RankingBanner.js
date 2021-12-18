import React, { Component } from 'react';
import './RankingBanner.css'


class RankingBanner extends Component {
    render() {
        return (
            <section className="hero is-medium" >
                <div className="hero-body" id="rankingBanner">
                    <div className="container" id="bannerBackground">
                        <h1 className="title is-1 " title="mainBannerTitle" >BWF WORLD <br/> RANKINGS</h1>
                    </div>
                </div>
            </section>
        )
    }
}

export default RankingBanner;