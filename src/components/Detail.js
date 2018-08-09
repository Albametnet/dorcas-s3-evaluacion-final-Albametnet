import React from 'react';
import {Link} from 'react-router-dom';

// import CharacterCard from './Detail';

class Detail extends React.Component {
  render() {

const myCharacter= this.props.people[this.props.match.params.id]

     

     
    return (
      <div>
        <Link to="/" className="back-btn">Volver</Link>
        <p>kjbkjb 
        </p>
        <p>{myCharacter.name}</p>
      </div>

    );
  }
}
// }

export default Detail;