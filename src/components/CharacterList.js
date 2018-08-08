import React from 'react';
// import CharacterCard from './CharacterCard';
import {Link} from 'react-router-dom';


class CharacterList extends React.Component {
  render() {
    return (
      <ul> {this.props.people
        .filter(item => {
          return item.name.toLowerCase().includes(this.props.name);
        })
        .map(item => {
          return (
          <div>
            <header className="App-header">
              <h1 className="App-title">Harry Potter Characters</h1>
            </header>

            <li key={item.id}>
            <Link to={`/characterdetail/:id ${item.id}`} >
              <div>
              <img src={item.image} alt="foto del personaje" />
              </div>
              </Link>
              <div>
                <h2 >{item.name} </h2>
                <p>{item.house}</p>
                <p>{item.id}</p>
              </div>
            </li>
          </div>
          )
        })}
      </ul>
    );
  }
}

export default CharacterList;