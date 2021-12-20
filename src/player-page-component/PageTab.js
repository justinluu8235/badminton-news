import React, { Component } from 'react';
import './PageTab.css';


class PageTab extends Component {
    render() {
        return (
            <div className="page-tab">
                <div className="page-names">
                    <div className="badmintonTab">
                        <h1 className="tabText" title="badminton-tab">BADMINTON</h1>
                        
                    </div>

                    <div className="para-badmintTab">
                        <h1 className="tabText" title="para-badmin-tab">PARA BADMINTON</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default PageTab;