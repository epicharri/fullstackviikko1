import axios from 'axios'
// import { request } from 'https';
const baseUrl = 'http://localhost:3001/api/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const deletePersonById = id => {
  try {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
  } catch(error) {
    console.log('Tää on persons.js:ssä errorina: ', error)
  }

  }

export default { 
  getAll: getAll, 
  create: create, 
  update: update,
  deletePersonById: deletePersonById
}