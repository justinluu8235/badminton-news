import React, {Component} from 'react';
import './PlayerDisplay.css';
import SinglePlayer from './SinglePlayer';




class PlayerDisplay extends Component {
    render(){
        return(
            <section className="hero is-medium" >
                <div className="hero-body"  class="playerDisplay">
                    <div className="container" class="playerDisplayContainer">
                        {displayPlayerInfo1}
                    </div>
                    <div className="container" class="playerDisplayContainer">
                        {displayPlayerInfo2}
                    </div>
                </div>
            </section>
        )
    }
}

export default PlayerDisplay;


let playerInfoArr1 = [
    {
      firstName: 'Tommy',
      lastName: 'Sugiarto',
      photoURL: 'https://res.cloudinary.com/bwf/t_96_player_profile/v1636512325/assets/players/thumbnail/14587',
      flagURL: 'https://extranet.bwfbadminton.com/docs/flags-svg/indonesia.svg'

    },
    {
        firstName: 'Carolina',
        lastName: 'Marin',
        photoURL: 'https://res.cloudinary.com/bwf/t_96_player_profile/v1590501415/assets/players/thumbnail/18228',
        flagURL: 'https://extranet.bwfbadminton.com/docs/flags-svg/spain.svg'
  
      },
      {
        firstName: 'Viktor',
        lastName: 'Axelson',
        photoURL: 'https://res.cloudinary.com/bwf/t_96_player_profile/v1627947839/assets/players/thumbnail/25831',
        flagURL: 'https://extranet.bwfbadminton.com/docs/flags-svg/denmark.svg'
  
      },
      {
        firstName: 'Chou',
        lastName: 'Tien Chen',
        photoURL: 'https://res.cloudinary.com/bwf/t_96_player_profile/v1628745030/assets/players/thumbnail/34810',
        flagURL: 'https://extranet.bwfbadminton.com/docs/flags-svg/chinese-taipei.svg'
  
      },
      {
        firstName: 'Ratchanok',
        lastName: 'Intanon',
        photoURL: 'https://res.cloudinary.com/bwf/t_96_player_profile/v1604897731/assets/players/thumbnail/35642',
        flagURL: 'https://extranet.bwfbadminton.com/docs/flags-svg/thailand.svg'
  
      },
      {
        firstName: 'Lin',
        lastName: 'Dan',
        photoURL: 'https://res.cloudinary.com/bwf/t_96_player_profile/v1604895106/assets/players/thumbnail/50906',
        flagURL: 'https://extranet.bwfbadminton.com/docs/flags-svg/china.svg'
  
      },
      {
        firstName: 'Saina',
        lastName: 'Nehwal',
        photoURL: 'https://res.cloudinary.com/bwf/t_96_player_profile/v1604894728/assets/players/thumbnail/52748',
        flagURL: 'https://extranet.bwfbadminton.com/docs/flags-svg/india_1.svg'
  
      },
      {
        firstName: 'Jan O',
        lastName: 'Jorgensen',
        photoURL: 'https://res.cloudinary.com/bwf/t_96_player_profile/v1604894662/assets/players/thumbnail/54431',
        flagURL: 'https://extranet.bwfbadminton.com/docs/flags-svg/denmark.svg'
  
      },
      {
        firstName: 'Tai',
        lastName: 'Tzu Ying',
        photoURL: 'https://res.cloudinary.com/bwf/t_96_player_profile/v1627948733/assets/players/thumbnail/61427',
        flagURL: 'https://extranet.bwfbadminton.com/docs/flags-svg/chinese-taipei.svg'
  
      },
      {
        firstName: 'Gabrielle',
        lastName: 'Adcock',
        photoURL: 'https://res.cloudinary.com/bwf/t_96_player_profile/v1604895367/assets/players/thumbnail/62844',
        flagURL: 'https://extranet.bwfbadminton.com/docs/flags-svg/england.svg'
  
      },

  ]

const displayPlayerInfo1 = playerInfoArr1.map((player, idx) => {
    return(
        <SinglePlayer key={idx} firstName={player.firstName} lastName={player.lastName} photoURL={player.photoURL} flagURL={player.flagURL}/>
    )
})

let playerInfoArr2 = [
    {
      firstName: 'Chris',
      lastName: 'Adcock',
      photoURL: 'https://res.cloudinary.com/bwf/t_96_player_profile/v1604895468/assets/players/thumbnail/70333',
      flagURL: 'https://extranet.bwfbadminton.com/docs/flags-svg/england.svg'

    },
    {
        firstName: 'Pusarla',
        lastName: 'V. Sindhu',
        photoURL: 'https://res.cloudinary.com/bwf/t_96_player_profile/v1627948657/assets/players/thumbnail/73173',
        flagURL: 'https://extranet.bwfbadminton.com/docs/flags-svg/india_1.svg'
  
      },
      {
        firstName: 'Long',
        lastName: 'Chen',
        photoURL: 'https://res.cloudinary.com/bwf/t_96_player_profile/v1627948076/assets/players/thumbnail/75787',
        flagURL: 'https://extranet.bwfbadminton.com/docs/flags-svg/china.svg'
  
      },
      {
        firstName: 'Yu Fei',
        lastName: 'Yu',
        photoURL: 'https://res.cloudinary.com/bwf/t_96_player_profile/v1627948602/assets/players/thumbnail/78778',
        flagURL: 'https://extranet.bwfbadminton.com/docs/flags-svg/china.svg'
  
      },
      {
        firstName: 'Prannoy',
        lastName: 'H. S.',
        photoURL: 'https://res.cloudinary.com/bwf/t_96_player_profile/v1604894749/assets/players/thumbnail/83950',
        flagURL: 'https://extranet.bwfbadminton.com/docs/flags-svg/india_1.svg'
  
      },
      {
        firstName: 'Michelle',
        lastName: 'Li',
        photoURL: 'https://res.cloudinary.com/bwf/t_96_player_profile/v1636439623/assets/players/thumbnail/84523',
        flagURL: 'https://extranet.bwfbadminton.com/docs/flags-svg/canada.svg'
  
      },
      {
        firstName: 'Kento',
        lastName: 'Momota',
        photoURL: 'https://res.cloudinary.com/bwf/t_96_player_profile/v1590501433/assets/players/thumbnail/89785',
        flagURL: 'https://extranet.bwfbadminton.com/docs/flags-svg/japan.svg'
  
      },
      {
        firstName: 'Anders',
        lastName: 'Antonsen',
        photoURL: 'https://res.cloudinary.com/bwf/t_96_player_profile/v1609731460/assets/players/thumbnail/91554',
        flagURL: 'https://extranet.bwfbadminton.com/docs/flags-svg/denmark.svg'
  
      },
      {
        firstName: 'Chen',
        lastName: 'Qing Chen',
        photoURL: 'https://res.cloudinary.com/bwf/t_96_player_profile/v1627950790/assets/players/thumbnail/94125',
        flagURL: 'https://extranet.bwfbadminton.com/docs/flags-svg/china.svg'
  
      },
      {
        firstName: 'Nozomi',
        lastName: 'Okuhara',
        photoURL: 'https://res.cloudinary.com/bwf/t_96_player_profile/v1604895749/assets/players/thumbnail/96713',
        flagURL: 'https://extranet.bwfbadminton.com/docs/flags-svg/japan.svg'
  
      },

  ]

const displayPlayerInfo2 = playerInfoArr2.map((player, idx) => {
    return(
        <SinglePlayer key={idx} firstName={player.firstName} lastName={player.lastName} photoURL={player.photoURL} flagURL={player.flagURL}/>
    )
})

