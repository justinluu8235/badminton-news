import React, {Component} from 'react';
import Navbar from './home-page-component/Navbar';
import PlayerBanner from './player-page-component/PlayerBanner'
import PageTab from './player-page-component/PageTab'
import TableSearch from './ranking-page-component/TableSearch';
import './player-page-component/TableSearch.css'
import PlayerDisplay from './player-page-component/PlayerDisplay';
import Footer from './home-page-component/Footer'

class PlayerPage extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <PlayerBanner/>
                <PageTab/>
                <TableSearch/>
                <PlayerDisplay/>
                <Footer/>
            </div>
        )
    }
}

export default PlayerPage;