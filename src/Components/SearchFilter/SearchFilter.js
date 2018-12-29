import React, { Component } from 'react'
import './SearchFilter.css'

class SearchFilter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tag: '',
      month: '',
      day: '',
      year: '',
      sortTag: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
    this.props.setFilter(this.state.tag)
  }

  handleDateSubmit = (e) => {
    e.preventDefault()
    const { month, day, year } = this.state
    const dateString = `${year}-${month}-${day}`
    this.props.filterNotes(dateString, null)
  }

  handleTagSubmit = (e) => {
    e.preventDefault()
    const { sortTag } = this.state
    this.props.filterNotes(null, sortTag)
  }

  renderSearch = () => {
    const { tag, month, day, year, sortTag } = this.state
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
            max='12'
            min='1'
            name='month'
            value={month}
            onChange={this.handleChange} />
          <input
            type='number'
            placeholder='23'
            max='31'
            min='1'
            name='day'
            value={day}
            onChange={this.handleChange} />
          <input
            type='number'
            placeholder='2018'
            max='2018'
            min='2000'
            name='year'
            value={year}
            onChange={this.handleChange} />
          <button>Search Notes</button>
        </form>
      )
    } else if (tag === 'Tag') {
      return (
        <div>
          <select 
            onChange={this.handleChange}
            name='sortTag'
            value={sortTag}>
            <option>Select Filter</option>
            <option>Work</option>
            <option>Personal</option>
            <option>Hobby</option>
          </select>
          <button onClick={this.handleTagSubmit}>Search Notes</button>
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
