import React, { useState } from "react"
import "./App.css"

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Harri Kähkönen', id: 1 }])
  const [newName, setNewName] = useState("")

  const handleNewName = (event) => {
    event.preventDefault()
    setNewName(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
  
    setPersons(persons.concat({
      name: newName,
      id: persons.length + 1
    }))
  }

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <form onSubmit={addPerson}>
        <div>
          nimi: <input 
          value={newName}
          onChange={handleNewName}
           />
      
          <button type="submit">Lisää</button>
        </div>
      </form>
      <h2>Numerot</h2>
      {persons.map(person => {
        return <div key={person.id}>{person.name}</div>
      })}
    </div>
  )
}

export default App
