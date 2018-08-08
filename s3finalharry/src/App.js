import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor (props) {
    super (props);

    this.filterName = this.filterName.bind(this);

    this.state = {
      people :[],
      name: ''
    }  
    
}
componentDidMount () {
  this.getPeople();
  
}
  getPeople () {
    fetch(
      'http://hp-api.herokuapp.com/api/characters'
    )
      .then(function (response) {
        return response.json();
      })
      .then((json) => {
        const characters = json;


        let newCharacters= [] 
          for ( let i=0; i<characters.length; i++) {
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
        <header className="App-header">
          <h1 className="App-title">Harry Potter Characters</h1>
        </header>
        <main>
        <input type="text" onChange= {this.filterName} />
        <ul> {this.state.people
        .filter(item => {
          return item.name.toLowerCase().includes(this.state.name);
        })
        .map (item =>{
          return (
            <li>
            <div>
             <img src={item.image} alt="foto del personaje"/>
             <h2 >{item.name} </h2>
             <p>{item.house}</p>
             <p>{item.id}</p>
            </div>
            </li>
          )
        })}  
        </ul>
        </main>
      </div>
    );
  }
}

export default App;
