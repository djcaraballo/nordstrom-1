import React, { Component } from 'react'
import './SearchFilter.css'

class SearchFilter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tag: '',
      month: '',
      day: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
    this.props.setFilter(this.state.tag)
  }

  handleDateSubmit = (e) => {
    e.preventDefault()
    const { month, day } = this.state
  }

  handleTagSubmit = (e) => {
    e.preventDefault()
  }

  renderSearch = () => {
    const { tag, month, day } = this.state
    if (tag === '') {
      return (
        <div></div>
      )
    } else if (tag === 'Date') {
      return (
        <form onSubmit={this.handleDateSubmit}>
          <input
            type='number'
            placeholder='06'
            maxLength='2'
            name='month'
            value={month}
            onChange={this.handleChange} />
          <input
            type='number'
            placeholder='23'
            maxLength='2'
            name='day'
            value={day}
            onChange={this.handleChange} />
          <button>Search Notes</button>
        </form>
      )
    } else if (tag === 'Tag') {
      return (
        <div>
          <select>
            <option>Work</option>
            <option>Personal</option>
            <option>Hobby</option>
          </select>
          <button onSubmit={this.handleTagSubmit}>Search Notes</button>
        </div>
      )
    }
  }

  render() {
    return(
      <div>
        <select 
          name='tag'
          onChange={this.handleChange}
          value={this.state.tag}>
          <option>Select Filter Category</option>
          <option>Date</option>
          <option>Tag</option>
        </select>
        <div>
          {this.renderSearch()}
        </div>
      </div>
    )
  }
}

export default SearchFilter
