import React from 'react'
import './NoteCard.css'

const NoteCard = (props) => {
  return(
    <div className='note-card'>
      <p>{props.note}</p>
      <p className='card-tag'>{props.tag}</p>
    </div>
  )
}

export default NoteCard
