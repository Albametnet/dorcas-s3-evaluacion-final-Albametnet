import React from 'react';
import CharacterList from './CharacterList';
import Filters from './Filters';

class Home extends React.Component {
  render() {
    return (
      <div className= "home">
        <header className="home__header">
          <h1 className="home__header-title">Harry Potter Characters</h1>
        </header>
        <main className= "home__main">
        <Filters onChange={this.props.onChange} />
        <CharacterList people={this.props.people} name={this.props.name} />
        </main>
      </div>
    );
  }
}

export default Home;