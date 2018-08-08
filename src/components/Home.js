import React from 'react';
import CharacterList from './CharacterList';
import Filters from './Filters';

class Home extends React.Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Harry Potter Characters</h1>
        </header>
        <Filters onChange={this.props.onChange} />
        <CharacterList people={this.props.people} name={this.props.name} />
      </div>
    );
  }
}

export default Home;