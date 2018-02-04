import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import GifList from './components/GifList';
import request from 'superagent';
import './styles/app.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      gifs: []
    }

    this.handleTermChange = this.handleTermChange.bind(this);
  }

  handleTermChange(term) {
    const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=PAj6Ma5qZZWHqhIQTTQ6hZaZiqPuFi4O`;

    request.get(url, (err, res) => {
      this.setState({
        gifs: res.body.data
      })
    });
  }

  render() {
    return (
      <div>
        <SearchBar onTermChange={term => this.handleTermChange(term)} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));