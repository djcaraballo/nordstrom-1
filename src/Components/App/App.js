import React, { Component } from 'react';
import NoteForm from '../NoteForm/NoteForm'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NoteForm />
        </header>
      </div>
    );
  }
}

export default App;
