import React, {Component} from 'react';
import './Schedule.css';

class Schedule extends Component {
    render(){
            return(
                <section id="parallax-2" className="hero is-large ">
                    <div className="hero-body" id="scheduleBody">
                        <h2 class="title-link">
                            <a href="https://bwfbadminton.com/calendar/">Schedule</a>
                        </h2>
                        <div class="schedule-wrap">
                            <div class="schedule-item">
                                <div class="schedule-logo">
                                <img class="schedule-logo" title="scheduleLogo1" src="https://extranet.bwfbadminton.com/docs/events/4044/logo-colour/2021bali_finals2.svg" alt=""/>
                                </div>

                                <div class="scedule-text-info">
                                    <h2>HSBC BWF World Tour Finals 2021(New dates)</h2>
                                    <h3 title="scheduleDate1">1 - 5 December</h3>
                                </div>

                                <div class="schedule-cat-logo">
                                    <img src="https://bwfbadminton.com/wp-content/themes/fansite-2020/assets/images/tournament/suffix_final-01.svg" alt=""/> 
                                    <div class="schedule-label green">View Results</div>
                                </div>
                            </div>

                            <div class="schedule-item">
                                <div class="schedule-logo">
                                <img class="schedule-logo" src="https://extranet.bwfbadminton.com/docs/events/3996/logo-colour/2021world_champs.svg" alt=""/>
                                </div>

                                <div class="scedule-text-info">
                                    <h2>TotalEnergies BWF World Championships 2021</h2>
                                    <h3 title="scheduleDate2">12 - 19 December</h3>
                                </div>

                                <div class="schedule-cat-logo">
                                    <img src="https://bwfbadminton.com/wp-content/themes/fansite-2020/assets/images/tournament/suffix_final-01.svg" alt=""/> 
                                    <div class="schedule-label red">Live Scores</div>
                                </div>
                            </div>

                            <div class="schedule-item">
                                <div class="schedule-logo">
                                <img class="schedule-logo last"  src="https://extranet.bwfbadminton.com/docs/events/4426/logo-colour/india_open.jpg" alt=""/>
                                </div>

                                <div class="scedule-text-info">
                                    <h2>YONEX-SUNRISE India Open 2022</h2>
                                    <h3>11 - 16 January</h3>
                                </div>

                                <div class="schedule-cat-logo">
                                    <img src="https://bwfbadminton.com/wp-content/themes/fansite-2020/assets/images/tournament/suffix_final-01.svg" alt=""/> 
                                    <div class="schedule-label blue">View Draws</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )
    }
}

export default Schedule;