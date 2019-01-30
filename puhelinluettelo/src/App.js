import React, { useState } from "react"
import "./App.css"

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Harri Kähkönen", number: "044-1234567", id: 1 },
    { name: "Frozen Elsa", number: "111-111111", id: 2 },
    { name: "Lumi Ukko", number: "222-22222", id: 3 }
  ])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [newSearch, setNewSearch] = useState("")

  const handleNewName = event => {
    event.preventDefault()
    setNewName(event.target.value)
  }

  const handleNewNumber = event => {
    event.preventDefault()
    setNewNumber(event.target.value)
  }

  const handleNewSearch = event => {
    event.preventDefault()
    setNewSearch(event.target.value)
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
      <div>
        Hae: <input value={newSearch} onChange={handleNewSearch} />
      </div>
      <form onSubmit={addPerson}>
        <div>
          Nimi: <input value={newName} onChange={handleNewName} />
          Numero: <input value={newNumber} onChange={handleNewNumber} />
          <button type="submit">Lisää</button>
        </div>
      </form>
      <h2>Numerot</h2>

      {persons
        .filter(person => person.name.toLocaleLowerCase().includes(newSearch.toLocaleLowerCase()))
        .map(person => {
          return (
            <div key={person.id}>
              {person.name} {person.number}
            </div>
          )
        })}
    </div>
  )
}

export default App
