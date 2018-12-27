import React from 'react'
import NoteCard from '../NoteCard/NoteCard'
import './NoteContainer.css'

const NoteContainer = ({ notes }) => {
  const notecards = notes.map(note => {
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
