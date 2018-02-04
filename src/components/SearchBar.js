import React from 'react';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      term: ''
    }
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onTermChange(term);
  }

  onShowTrending() {
    this.props.onShowTrending();
    document.getElementById("input").value = "";
  }

  render() {
    return (
      <div className="search">
        <input id="input" placeholder="Enter text to search for gifs" onChange={event => this.onInputChange(event.target.value)} />
        <button onClick={event => this.onShowTrending()}>Show Trending</button>
      </div>
    );
  }
}

export default SearchBar;