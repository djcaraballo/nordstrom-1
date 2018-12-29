export const fetchData = async () => {
  const url = 'https://ncj4k2jwc7.execute-api.us-east-2.amazonaws.com/Development'
  const response = await fetch(url)
  if (response.status < 300) {
    const result = await response.json()
    return result.body.notes
  } else {
    return { error: 'fetch failed'}
  }
}

export const saveData = async (data) => {
  const url = 'https://ncj4k2jwc7.execute-api.us-east-2.amazonaws.com/Development'
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers:{'Content-Type': 'application/json'}
  })
}

export const filterByDate = async (dateString) => {
  const notes = await fetchData()
  const filteredNotes = notes.filter(note => {
    const date = new Date(note.id).toISOString()
    if (date.includes(dateString)) {
      return true
    }
  })
  return filteredNotes
}

export const filterByTag = async (tag) => {
  const notes = await fetchData()
  const filteredNotes = notes.filter(note => note.tag === tag)
  return filteredNotes
}