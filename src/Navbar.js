import React, {Component} from 'react';
import './Navbar.css'

class Navbar extends Component {
    render(){
        return(
            <nav class="navbar"id="navbar">
                    <div class="container" >
                        <div class="navbar-brand">
                            <a class="navbar-item" href="#">
                            <div id="imageBackground">
                                <img  title="mainLogo" class="desktop-main-logo" src="https://bwfbadminton.com/wp-content/plugins/bwf-menu-system/images/logo-bwf-rgb.svg" />
                            </div>
                            </a>
                            <span class="navbar-burger burger" data-target="navbarMenu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                        <div id="navbarMenu" class="navbar-menu">
                            <div class="navbar-end">
                                <a class="navbar-item">
                                    Rankings
                                </a>
                                <a class="navbar-item" title="calendarLink">
                                    Calendar
                                </a>
                                <a class="navbar-item">
                                    Player
                                </a>
                                <a class="navbar-item">
                                    News & Media
                                </a>
                                <a class="navbar-item">
                                    Match Centre
                                </a>
                                <a class="navbar-item">
                                    中文
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
        )
    }
}

export default Navbar;