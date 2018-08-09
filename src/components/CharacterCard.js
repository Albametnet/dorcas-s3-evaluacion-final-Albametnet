import React from 'react';
import { Link } from 'react-router-dom';


class Detail extends React.Component {
  render() {

    const myCharacter = this.props.people[this.props.match.params.id]

    let state = '';
    if (myCharacter.alive == true) {
      state = 'Alive';
    }
    else {
      state = 'Muerto 💀';
    }
    return (
      <div>
        <Link to="/" className="back-btn">Volver</Link>
        <img src={myCharacter.image} alt="foto del personaje" />
        <h2>{myCharacter.name}</h2>
        <p>House: {myCharacter.house}</p>
        <p>Birthdate: {myCharacter.dateOfBirth}</p>
        <p>Patronus: {myCharacter.patronus}</p>
        <p>Life state : {state}</p>

      </div>

    );
  }
}
export default Detail;