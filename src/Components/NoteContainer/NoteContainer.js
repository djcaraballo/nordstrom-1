import React from 'react'
import NoteCard from '../NoteCard/NoteCard'
import './NoteContainer.css'

const NoteContainer = (props) => {
  const notecards = props.notes.map(note => {
    return (
      <NoteCard 
        key={note.id}
        note={note.note}
        tag={note.tag} />
    )
  })

  return(
    <div>
      {notecards}
    </div>
  )
}

export default NoteContainer
