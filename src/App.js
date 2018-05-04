import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { api, sid } from './utils/api.js';

class App extends Component {
	state = { movies: [], page: 0, total_pages: 0 }

	componentDidMount() {
		axios.get(`https://api.themoviedb.org/3/account/{account_id}/watchlist/movies?api_key=${api}&language=en-US&session_id=${sid}`)
		.then( res => {
			this.setState({ movies: res.data.results, page: res.data.page, total_pages: res.data.total_pages })
		})
	}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
