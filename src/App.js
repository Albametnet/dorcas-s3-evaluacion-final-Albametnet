import React, { Component } from 'react';
import './stylesheets/App.css';
import Home from './components/Home';
import CharacterCard from './components/CharacterCard';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.filterName = this.filterName.bind(this);
    this.state = {
      people: [],
      name: '',
      casa: ''
    }
  }
  componentDidMount() {
    this.getPeople();
  }
  getPeople() {
    fetch(
      'http://hp-api.herokuapp.com/api/characters'
    )
      .then(function (response) {
        return response.json();
      })
      .then((json) => {
        const characters = json;


        let newCharacters = []
        for (let i = 0; i < characters.length; i++) {
          newCharacters[i] = {
            ...characters[i],
            id: i,
          }
        }
        this.setState({
          people: newCharacters
        })
      })
  }
  filterName(e) {
    const myperson = e.currentTarget.value.toLowerCase();
    this.setState({
      name: myperson
    });
  }
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" render={() => <Home people={this.state.people} name={this.state.name} onChange={this.filterName} />} />
          <Route path="/charactercard/:id" render={props => <CharacterCard match={props.match} people={this.state.people}/>} />
        </Switch>
      </div>
    );
  }
}

export default App;
