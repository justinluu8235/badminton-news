import React, { Component } from 'react';
import './Parallax.css';
import Banner from './Banner';
import News from './News';
import Schedule from './Schedule'
import Navbar from './Navbar'

class Parallax extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Banner />
                <News />
                <Schedule />
                <section id="parallax-3" className="hero is-large ">
                    <div className="hero-body">
                        <div className="container">
                            <div className="columns">
                                <div className="column is-6 is-offset-6">
                                    <h1 className="title is-1 ">Amet Consectetur</h1>
                                    <hr className="content-divider" />
                                    <h2 className="subtitle">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure minus nam necessitatibus neque in perferendis eveniet dolorum assumenda dolores accusamus.</h2>
                                    <a href="#" className="button is-white is-inverted">Next&ensp;<i className="fad fa-chevron-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="cta va">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-6">
                                <h1 className="title is-1 ">Adipisicing Elit</h1>
                                <hr className="content-divider" />
                                <h2 className="subtitle">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas ut nulla maiores, beatae voluptas sunt excepturi deserunt vero. Beatae est ratione quia neque molestias, cum asperiores quibusdam rem illum, debitis dolorem natus, eos fuga eveniet numquam ab officia reiciendis inventore. Tempore repudiandae exercitationem quisquam? Fugiat!</h2>
                            </div>
                            <div className="column is-6">
                                <div className="field">
                                    <label className="label">Name</label>
                                    <div className="control">
                                        <input className="input is-medium" type="text" placeholder="Jon Snow" />
                                    </div>
                                </div>
                                <br />
                                <div className="field">
                                    <label className="label">Email</label>
                                    <div className="control">
                                        <input className="input is-medium" type="email" placeholder="jon@winterfell.com" />
                                    </div>
                                </div>
                                <br />
                                <div className="field is-grouped">
                                    <div className="control">
                                        <button className="button is-white is-rounded is-outlined">Submit</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                <footer className="footer">
                    <div className="content has-text-centered">
                        <p>
                            <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
                            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                            is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                        </p>
                    </div>
                </footer>
            </div>
        )
    }

}


export default Parallax;