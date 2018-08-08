import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Detail from './components/Detail';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.filterName = this.filterName.bind(this);

    this.state = {
      people: [],
      name: ''
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
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <Home people={this.state.people} name={this.state.name} onChange={this.filterName} />} />
          <Route path="/characterdetail/:id" component={Detail} />
        </Switch>
      </div>
    );
  }
}

export default App;
