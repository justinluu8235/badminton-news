# Badminton React


## Key Features

- Latest top badminton news
  - ![image](./Screen-Shot-1.png)

- Additional latest badminton news 
  - ![image](./Screen-Shot-2.png)

- Schedule of upcoming competitions
  - ![image](Screen-Shot-3.png)

- Page to display current top ranked players
  - ![image](PlayerPage.png)

- Page to display current rankings
  - ![image](PlayerRankings.png)



### Component for a Single Player on the player display page:


```js
class SinglePlayer extends Component {

    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="individualPlayer">
                <div className="playerImage">
                    <div className="playerPhoto">
                        <img title="player-photo" src={this.props.photoURL} />
                    </div>
                    <div className="playerFlag">
                        <img title="player-flag" src={this.props.flagURL} alt="Indonesia" />
                    </div>
                </div>

                <div className="playerName">
                    <div><span class="name-first" title="player-first-name">{this.props.firstName}</span><span class="name-last">{this.props.lastName}</span></div>
                </div>
            </div>
        )
    }
}
```

### Data of the players on the player display page


```js
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
```

### Example of a test

```js
test('renders the copyright', () => {
  render(<Parallax />);
  const element = screen.getByTitle(/copyright/i);
  expect(element).toBeInTheDocument();
});
```
Tests passing
  - ![image](./test-pass.png)
