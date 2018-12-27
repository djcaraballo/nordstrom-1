import React, { Component } from 'react'
import './SearchFilter.css'

class SearchFilter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tag: '',
      filter: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
    this.props.setFilter(this.state.tag)
  }

  handleSubmit = () => {
    
  }

  handleFilter = () => {

  }

  render() {
    const renderedSearch = () => {
      const { tag } = this.state
      if (tag === 'Date') {
        return (
          <form onSubmit={this.handleSubmit}>
            <input
              type='number'
              placeholder='06'
              maxLength='2' />
            <input
              type='number'
              placeholder='23'
              maxLength='2' />
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
            <button></button>
          </div>
        )
      }
    }

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
          {renderedSearch}
        </div>
      </div>
    )
  }
}

export default SearchFilter
