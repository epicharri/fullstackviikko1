import React, { useState } from "react"
import "./App.css"

const Input = props => {
  const { text, newSomething, handleNewSomething } = props
  return (
    <div>
      {text} <input value={newSomething} onChange={handleNewSomething} />
    </div>
  )
}

const Listing = props => {
  const { persons, newSearch } = props
  return persons
    .filter(person =>
      person.name.toLocaleLowerCase().includes(newSearch.toLocaleLowerCase())
    )
    .map(person => {
      return (
        <div key={person.id}>
          {person.name} {person.number}
        </div>
      )
    })
}

const ReadPerson = props => {
  const {
    addPerson,
    newName,
    handleNewName,
    newNumber,
    handleNewNumber
  } = props
  return (
    <form onSubmit={addPerson}>
      <div>
        <Input
          text={"Nimi: "}
          newSomething={newName}
          handleNewSomething={handleNewName}
        />
        <Input
          text={"Numero: "}
          newSomething={newNumber}
          handleNewSomething={handleNewNumber}
        />
        <button type="submit">Lisää</button>
      </div>
    </form>
  )
}

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
      setNewName("")
      setNewNumber("")
      setNewSearch("")
    } else window.alert(`${newName} on jo luettelossa!`)
  }

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <Input
        text={"Hae: "}
        newSomething={newSearch}
        handleNewSomething={handleNewSearch}
      />
      <ReadPerson
        addPerson={addPerson}
        newName={newName}
        handleNewName={handleNewName}
        newNumber={newNumber}
        handleNewNumber={handleNewNumber}
      />

      <h2>Numerot</h2>

      <Listing persons={persons} newSearch={newSearch} />
    </div>
  )
}

export default App
