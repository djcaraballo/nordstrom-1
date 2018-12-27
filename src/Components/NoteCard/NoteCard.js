import React from 'react'
import './NoteCard.css'

const NoteCard = (props) => {
  return(
    <div>
      <p>{props.note}</p>
      <p>{props.tag}</p>
    </div>
  )
}

export default NoteCard
