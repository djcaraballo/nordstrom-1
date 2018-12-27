import React, { Component } from 'react';
import NoteForm from '../NoteForm/NoteForm'
import NoteContainer from '../NoteContainer/NoteContainer'
import SearchFilter from '../SearchFilter/SearchFilter'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [],
      searchBy: ''
    }
  }

  addNote = (note) => {
    const newNote = {id: Date.now(), ...note}
    this.setState({ notes: [newNote, ...this.state.notes]})
  }

  setFilter = (tag) => {
    console.log('set the filter!')
    this.setState({ searchBy: tag })
    console.log('filter set!')
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NoteForm addNote={this.addNote}/>
          <SearchFilter setFilter={this.setFilter}/>
          <NoteContainer notes={this.state.notes} />
        </header>
      </div>
    );
  }
}

export default App;
