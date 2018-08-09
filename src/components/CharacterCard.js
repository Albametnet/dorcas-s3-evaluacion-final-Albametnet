import React from 'react';
import { Link } from 'react-router-dom';


class Detail extends React.Component {
  render() {

    const myCharacter = this.props.people[this.props.match.params.id]

    let state = '';
    if (myCharacter.alive === true) {
      state = 'Alive';
    }
    else {
      state = 'Muerto 💀';
    }
    return (
      <div className="character__page">
        <div className="character__card">
          <div className="character__card-cover" style={{ backgroundImage: `url(${myCharacter.image})` }}>
            <img className="character__card-img" src={myCharacter.image} alt="foto del personaje" />
          </div>
          <div className="character__card-texts">
            <div className="character__card-name">
              <h2>{myCharacter.name}</h2>
            </div>
            <div className="character__card-noname">
            <p>House: {myCharacter.house}</p>
            <p>Birthdate: {myCharacter.dateOfBirth}</p>
            <p>Patronus: {myCharacter.patronus}</p>
            <p>Life state : {state}</p>
            </div>
            <div className="return__button">
            <Link to="/" className="back-btn">Volver</Link>
          </div>
          </div>
          
        </div>




      </div>

    );
  }
}
export default Detail;