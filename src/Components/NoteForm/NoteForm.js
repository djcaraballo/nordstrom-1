import React, { Component } from 'react'
import './NoteForm.css'

class NoteForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      note: '',
      tag: ''
    }
  }

  handleChange = (e) => {
    const { value, name } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    //send note to the backend
  }

  render() {
    const { note, tag } = this.state
    return(
      <form className='note-form' onSubmit={this.handleSubmit}>
        <textarea
          className='text-input'
          placeholder='Enter note text here (max 250 characters)'
          name='note'
          value={note}
          onChange={this.handleChange}>
        </textarea>
        <select
          className='select'
          name='tag'
          value={tag}
          onChange={this.handleChange}>
          <option>Work</option>
          <option>Personal</option>
          <option>Hobby</option>
        </select>
        <button>Save Note</button>
      </form>
    )
  }
}

export default NoteForm
