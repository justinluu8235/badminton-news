import React, { Component } from 'react';
import './News.css';
import featuredImage from '../images/featured-news.jpeg';

class News extends Component {
    render() {
        return (
            <section id="parallax-1" className="hero is-large " >
                <div className="hero-body" id="newsSection">
                    <h2 class="newstitle">
                        <a href="https://bwfbadminton.com/news/" class="newsTitleText">
                            Latest Stories
                        </a>
                    </h2>
                    <div className="container" id="newsGrid">
                        <div class="featured-image">
                            <img src={featuredImage}></img>
                        </div>
                        <div class="featured-text">
                            <h2 class="title-featured">Featured</h2>
                            <h2 class="title-featured-text">Loh’s Milestone for Singapore </h2>
                        </div>
                        <div class="related-news">
                            <div class="news-individual">
                                <div class="related-news-thumb">
                                    <img src="https://bwfbadminton.com/wp-content/uploads/2021/12/Qts_Lakshya-Sen-400x310.jpg" alt="Srikanth, Lakshya Make History for India" class="smlthumb" />
                                </div>
                                <div class="related-news-text">
                                    <h3 class="related-news-title">Srikanth, Lakshya Make History for India </h3>
                                </div>
                            </div>

                            <div class="news-individual">
                                <div class="related-news-thumb">
                                <img src="https://bwfbadminton.com/wp-content/uploads/2021/12/Qts_Tai-Tzu-Ying-WC-400x310.jpg" alt="Tai Breaks World Championships Jinx" class="smlthumb"/>
                                </div>
                                <div class="related-news-text">
                                    <h3 class="related-news-title">Tai Breaks World Championships Jinx </h3>
                                </div>
                            </div>

                            <div class="news-individual">
                                <div class="related-news-thumb">
                                <img src="https://bwfbadminton.com/wp-content/uploads/2021/12/4-Gabriela-Stoeva-400x310.jpeg" alt="Gabriela Battles Painful Back; Stoevas in Quarters" class="smlthumb"/>
                                </div>
                                <div class="related-news-text">
                                    <h3 class="related-news-title">Gabriela Battles Painful Back; Stoevas in Quarters</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default News;