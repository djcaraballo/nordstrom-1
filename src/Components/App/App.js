import React, { Component } from 'react';
import NoteForm from '../NoteForm/NoteForm'
import NoteContainer from '../NoteContainer/NoteContainer'
import SearchFilter from '../SearchFilter/SearchFilter'
import { fetchData, saveData, filterByDate, filterByTag } from '../../API' 
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
    this.setState({ notes })
  }

  addNote = async (note) => {
    const { notes } = this.state
    const newNote = {id: new Date().toISOString(), ...note}
    saveData(newNote)
    this.setState({ notes: [newNote, ...notes] })
  }

  setFilter = (tag) => {
    this.setState({ searchBy: tag })
    console.log('filter set!')
  }

  filterNotes = async (dateString, sortTag) => {
    const tag = this.state.searchBy
    console.log(dateString)
    console.log(tag)
    let filteredNotes
    if (tag === 'Date') {
      filteredNotes = await filterByDate(dateString)
    } else if (tag === 'Tag') {
      filteredNotes = await filterByTag(sortTag)
      console.log(filteredNotes)
    } else {
      filteredNotes = await fetchData()
    }
    this.setState({ notes: filteredNotes }) 
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Add Notes!</h1>
          <NoteForm addNote={this.addNote}/>
          <SearchFilter setFilter={this.setFilter} filterNotes={this.filterNotes}/>
          <NoteContainer notes={this.state.notes} />
        </header>
      </div>
    );
  }
}

export default App;
