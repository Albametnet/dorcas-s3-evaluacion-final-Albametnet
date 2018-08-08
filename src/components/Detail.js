import React from 'react';
import {Link} from 'react-router-dom';

// import CharacterCard from './Detail';

class Detail extends React.Component {
  render() {
    // if (this.props.people.length >= 1) {
    //   const filtroID = this.props.match.params.id;
    //   const otras= this.props.people;

    //   const person = otras.filter(item => {
    //     return item.id === filtroID;        
    //   });

    //   const myCharacter = person;
    return (
      <div>
        <Link to="/" className="back-btn">Volver</Link>
        <p> aebdfbd
        </p>
        {/* <p>{myCharacter}</p> */}
        {/* <CharacterCard  item={myCharacter}/> */}
      </div>

    );
  }
}
// }

export default Detail;