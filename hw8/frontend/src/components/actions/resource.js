import fetch from 'isomorphic-fetch'
const url = 'https://suz-ricebookserver.herokuapp.com'

//wraps fetch in wrapper method
const resource = (method, endpoint, payload) => {
  const options =  {
    method,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  if (payload) {
    options.body = JSON.stringify(payload)
  }

  return fetch(`${url}/${endpoint}`, options)
    .then(r => {
      if (r.status === 200) {
        return (r.headers.get('Content-Type').indexOf('json') > 0) ? r.json() : r.text()
      } else {
        throw new Error(r.statusText)
      }
    })
}

//special resource for uploading form data with images
const resourceImg = (method, endpoint, payload) => {
  const options =  {
    method: method,
    credentials: 'include',
    body: payload }

  return fetch(`${url}/${endpoint}`, options)
    .then(r => {
      if (r.status === 200) {
        return (r.headers.get('Content-Type').indexOf('json') > 0) ? r.json() : r.text()
      } else {
        throw new Error(r.statusText)
      }
    })
}

export { url, resource, resourceImg }