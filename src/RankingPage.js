import React, {Component} from 'react';
import './Parallax.css';
import RankingBanner from './ranking-page-component/RankingBanner';
import NavBar from './home-page-component/Navbar'
import TableSearch from './ranking-page-component/TableSearch'
import Table from './ranking-page-component/Table'

class RankingPage extends Component {
    render(){
        return(
            <div>
                <NavBar/>
                <RankingBanner/>
                <TableSearch/>
                <Table/>
                <footer className="footer">
                    <div className="content has-text-centered">
                    <img src="https://bwfbadminton.com/wp-content/themes/fansite-2020/assets/images/bwf-logo-svg.svg"/>
                    <div className="copyright" title="copyright">©&nbsp;Copyright 2021 Badminton World Federation. All rights reserved. The content of this website is the property of BWF or used under licence by BWF. No part may be copied, republished, stored, or otherwise republished or transmitted without the prior written permission of BWF. For further information, please refer to our <a href="https://bwfbadminton.com/terms-conditions/">Terms &amp; Conditions.</a>
                    </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default RankingPage;