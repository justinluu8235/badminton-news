import React, {Component} from 'react';
import './Table.css'

class Table extends Component {
    render(){
        return(
            <section className="hero is-medium" >
            <div className="hero-body" id="rankingTableBody" >
                <div className="container" id="rankingTableContainer" >
                    <table class="rankingTable" >
                        <thead>
                            <tr id='columnNames' title="column-names">
                            <th class="col-rank">RANK</th> 
                            <th class="col-player">NAME</th> 
                            <th class="col-country">NATION</th> 
                            <th class="col-tmt">TOURNAMENTS</th> 
                            <th class="col-points">POINTS</th> 
                            <th class="col-breakdown">BREAKDOWN</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr title="first-row-data">
                                <td>1</td>
                                <td>Viktor AXELSEN</td>
                                <td><img class="table-image" width="48" src="https://extranet.bwfbadminton.com/docs/flags-svg/denmark.svg" title="Denmark"/></td>
                                <td>31</td>
                                <td><strong>116,779</strong></td>
                                <td>
                                    <i class="fa fa-bar-chart" ></i>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Kento MOMOTA</td>
                                <td><img class="table-image" width="48" src="https://extranet.bwfbadminton.com/docs/flags-svg/japan.svg" title="Japan"/></td>
                                <td>22</td>
                                <td><strong>112,210</strong></td>
                                <td>
                                    <i class="fa fa-bar-chart" ></i>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Anders ANTONSEN</td>
                                <td><img class="table-image" width="48" src="https://extranet.bwfbadminton.com/docs/flags-svg/denmark.svg" title="Denmark"/></td>
                                <td>31</td>
                                <td><strong>97,500</strong></td>
                                <td>
                                    <i class="fa fa-bar-chart" ></i>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>CHOU Tien Chen</td>
                                <td><img class="table-image" width="48" src="https://extranet.bwfbadminton.com/docs/flags-svg/chinese-taipei.svg" title="Denmark"/></td>
                                <td>33</td>
                                <td><strong>92,682</strong></td>
                                <td>
                                    <i class="fa fa-bar-chart" ></i>
                                </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Anthony Sinisuka GINTING</td>
                                <td><img class="table-image" width="48" src="https://extranet.bwfbadminton.com/docs/flags-svg/denmark.svg" title="Denmark"/></td>
                                <td>29</td>
                                <td><strong>87,567</strong></td>
                                <td>
                                    <i class="fa fa-bar-chart" ></i>
                                </td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>CHEN Long</td>
                                <td><img class="table-image" width="48" src="https://extranet.bwfbadminton.com/docs/flags-svg/china.svg" title="China"/></td>
                                <td>18</td>
                                <td><strong>84,400</strong></td>
                                <td>
                                    <i class="fa fa-bar-chart" ></i>
                                </td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>LEE Zii Jia</td>
                                <td><img class="table-image" width="48" src="https://extranet.bwfbadminton.com/docs/flags-svg/malaysia.svg" title="Malaysia"/></td>
                                <td>34</td>
                                <td><strong>78,080</strong></td>
                                <td>
                                    <i class="fa fa-bar-chart" ></i>
                                </td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Jonatan CHRISTIE</td>
                                <td><img class="table-image" width="48" src="https://extranet.bwfbadminton.com/docs/flags-svg/indonesia.svg" title="Indonesia"/></td>
                                <td>29</td>
                                <td><strong>77,647</strong></td>
                                <td>
                                    <i class="fa fa-bar-chart" ></i>
                                </td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>NG Ka Long Angus</td>
                                <td><img class="table-image" width="48" src="https://extranet.bwfbadminton.com/docs/flags-svg/hong-kong.svg" title="Hong Kong"/></td>
                                <td>30</td>
                                <td><strong>69,370</strong></td>
                                <td>
                                    <i class="fa fa-bar-chart" ></i>
                                </td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Rasmus GEMKE</td>
                                <td><img class="table-image" width="48" src="https://extranet.bwfbadminton.com/docs/flags-svg/denmark.svg" title="Denmark"/></td>
                                <td>33</td>
                                <td><strong>68,043</strong></td>
                                <td>
                                    <i class="fa fa-bar-chart" ></i>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
        )
    }
}

export default Table;