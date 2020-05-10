import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
		  isFetching: false
    };
	}

	componentWillMount() {
		require('dotenv').config()
		const db = require('db') 
			db.connect({
				API_KEY: REACT_APP_API_KEY
			})
		const verseIndex = Math.floor(Math.random() * VERSES.length); //! New API params
		const verseID = VERSES[verseIndex]; //! New API params

		const verse = document.querySelector(`#verse-content`); //! New API params
		const verseRef = document.querySelector(`#verse`); //! New API params

		const BIBLE_ID = `61fd76eafa1577c2-02`; //! New API params
		const url = `http://cdn.scripture.api.bible/fums/fumsv2.min.js`; //! New API params

		fetch(url)
			.then(response => response.json()
        .then(data => {
	        const verse = data.data.passage.verses[0];
	        const ref = `${verse.book} ${verse.chapter}:${verse.verse}`;
	        this.setState({
            verseText: verse.text,
            verseRef: ref
          });
        })
			);
	}

  render() {
    return (
      <div className="App">
        <div className="centered">
          <div className="text">{this.state.verseText}</div>
          <div className="ref">{this.state.verseRef}</div>
        </div>
      </div>
    );
  }
}

export default App;
