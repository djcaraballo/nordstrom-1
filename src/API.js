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

export const filterData = (category) => {
  //category will be either tag or date
  //if the tag is date
  //return all notes with the id that matches the date
  //if the tag is tag
  //return all notes with the tag that matches the tag
}