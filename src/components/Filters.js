import React from 'react';

class Filters extends React.Component {
  render() {
    return (
      <div className="filter">
        <input className="filter__input" type="text" onChange={this.props.onChange} />
      </div>

    );
  }
}

export default Filters;