import React from 'react';
import { Link } from 'react-router-dom';


class CharacterList extends React.Component {
  render() {
    return (
      <ul className= "character__list"> {this.props.people
        .filter(item => {
          return item.name.toLowerCase().includes(this.props.name);
        })
        .map(item => {
          return (
            <div>
              <li className="character__list-item">
                <Link to={`/charactercard/${item.id}`} match={this.match} item={item} name={item.name} house ={item.house}>
                  <div className= "character__list-cover" style={{backgroundImage: `url(${item.image})`}}>
                    <img className= "character__list-img" src={item.image} alt="foto del personaje" />
                  </div>
                </Link>
                <div className= "character__texts">
                  <h2 className="character__list-name" >{item.name} </h2>
                  <p className="character__list-house">{item.house}</p>
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