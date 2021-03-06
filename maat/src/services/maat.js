import axios from 'axios'

const baseUrl = 'https://restcountries.eu/rest/v2/all'
const byNameUrl = 'https://restcountries.eu/rest/v2/name/'


const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const getByName = props => {
    const name = props
    const request = axios.get(`${byNameUrl}${name}`)
    return request.then(response => response.data)
}


export default { 
    getAll: getAll,
    getByName: getByName
}

/*
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
*/