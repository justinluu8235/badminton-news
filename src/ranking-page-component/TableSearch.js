import React, {Component} from 'react';
import './TableSearch.css'

class TableSearch extends Component {
    render(){
        return(
            <div className="table-search">
                <div className="search-row">
                    <div className='ranking-search-input'>
                        <i  class="material-icons">search</i>
                     
                        <input id="input-3" type="text" placeholder="Search player/country..." title="table-search-bar"/>
                    </div>
                </div>
            </div>
        )
    }
}


export default TableSearch;