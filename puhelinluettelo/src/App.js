import React, { useState } from "react"
import "./App.css"

const App = () => {
  const [persons, setPersons] = useState([{ name: "Harri Kähkönen", number:"044-1234567", id: 1 }])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")

  const handleNewName = event => {
    event.preventDefault()
    setNewName(event.target.value)
  }

  const handleNewNumber = event => {
    event.preventDefault()
    setNewNumber(event.target.value)
  }

  const addPerson = event => {
    event.preventDefault()
    if (!persons.map(person => person.name).includes(newName)) {
      setPersons(
        persons.concat({
          name: newName,
          number: newNumber,
          id: persons.length + 1
        })
      )
    } else window.alert(`${newName} on jo luettelossa!`)

  }

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <form onSubmit={addPerson}>
        <div>
          nimi: <input value={newName} onChange={handleNewName} />
          numero: <input value={newNumber} onChange={handleNewNumber} />
          <button type="submit">Lisää</button>
        </div>
      </form>
      <h2>Numerot</h2>
      {persons.map(person => {
        return <div key={person.id}>{person.name} {person.number}</div>
      })}
    </div>
  )
}

export default App
