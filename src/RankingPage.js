import React, {Component} from 'react';
import './Parallax.css';
import RankingBanner from './ranking-page-component/RankingBanner';
import NavBar from './home-page-component/Navbar'
import TableSearch from './ranking-page-component/TableSearch'
import Table from './ranking-page-component/Table'
import Footer from './home-page-component/Footer'

class RankingPage extends Component {
    render(){
        return(
            <div>
                <NavBar/>
                <RankingBanner/>
                <TableSearch/>
                <Table/>
                <Footer/>
            </div>
        )
    }
}

export default RankingPage;