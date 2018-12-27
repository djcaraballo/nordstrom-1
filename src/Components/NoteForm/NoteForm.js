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
    console.log(this.state)
    this.props.addNote(this.state)
    this.setState({ 
      note: '',
      tag: ''
    })
    if (this.state.tag === '') {
      return false
    }
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
          maxLength='250'
          onChange={this.handleChange}>
        </textarea>
        <select
          className='select'
          name='tag'
          value={tag}
          onChange={this.handleChange}>
          <option>Select Tag</option>
          <option>Work</option>
          <option>Personal</option>
          <option>Hobby</option>
        </select>
        <button
          disabled={this.state.note === '' || this.state.tag === '' ? true : false}
        >Save Note</button>
      </form>
    )
  }
}

export default NoteForm