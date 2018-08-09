import React from 'react';
import { Link } from 'react-router-dom';


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
              <li key={item.id}>
                <Link to={`/characterdetail/:id ${item.id}`} match={this.match} item={item} name={item.name} house ={item.house}>
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