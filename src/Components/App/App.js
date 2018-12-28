import React, { Component } from 'react';
import NoteForm from '../NoteForm/NoteForm'
import NoteContainer from '../NoteContainer/NoteContainer'
import SearchFilter from '../SearchFilter/SearchFilter'
import { fetchData, saveData, filterData } from '../../API' 
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [],
      searchBy: ''
    }
  }

  componentDidMount = async () => {
    const notes = await fetchData()
    console.log(notes)
    this.setState({ notes })
  }

  addNote = (note) => {
    const newNote = {id: Date(), ...note}
    saveData(newNote)
  }

  setFilter = (tag) => {
    this.setState({ searchBy: tag })
    console.log('filter set!')
  }

  filterNotes = () => {
    const tag = this.state.searchBy
    const filteredNotes = filterData(tag)
    return filteredNotes
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Add Notes!</h1>
          <NoteForm addNote={this.addNote}/>
          <SearchFilter setFilter={this.setFilter}/>
          <NoteContainer notes={this.state.notes} />
        </header>
      </div>
    );
  }
}

export default App;
