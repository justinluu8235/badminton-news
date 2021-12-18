import React, {Component} from 'react';

class Navbar extends Component {
    render(){
        return(
            <nav class="navbar">
                    <div class="container">
                        <div class="navbar-brand">
                            <a class="navbar-item" href="#">
                            <img class="desktop-main-logo" src="https://bwfbadminton.com/wp-content/plugins/bwf-menu-system/images/logo-bwf-rgb.svg" />
                            </a>
                            <span class="navbar-burger burger" data-target="navbarMenu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                        <div id="navbarMenu" class="navbar-menu">
                            <div class="navbar-end">
                                <a class="navbar-item is-active">
                                    Home
                                </a>
                                <a class="navbar-item">
                                    Examples
                                </a>
                                <a class="navbar-item">
                                    Features
                                </a>
                                <a class="navbar-item">
                                    Team
                                </a>
                                <a class="navbar-item">
                                    Archives
                                </a>
                                <a class="navbar-item">
                                    Help
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
        )
    }
}

export default Navbar;