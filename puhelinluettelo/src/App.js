import React, {
  useState,
  useEffect
} from "react"
//import axios from 'axios'
import personService from "./services/persons"

const Input = props => {
  const {
    text,
    newSomething,
    handleNewSomething
  } = props
  return (
    <div>
      {text}{" "}
      <input
        value={newSomething}
        onChange={handleNewSomething}
      />
    </div>
  )
}

const ReadPerson = props => {
  console.log(
    "props readpersonissa on ",
    props
  )
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
          handleNewSomething={
            handleNewName
          }
        />
        <Input
          text={"Numero: "}
          newSomething={newNumber}
          handleNewSomething={
            handleNewNumber
          }
        />
        <button type="submit">
          Lisää
        </button>
      </div>
    </form>
  )
}

const Listing = props => {
  const {
    persons,
    newSearch,
    deletePerson
  } = props

  return persons
    .filter(person =>
      person.name
        .toLocaleLowerCase()
        .includes(
          newSearch.toLocaleLowerCase()
        )
    )
    .map(person => {
      return (
        <div key={person.id}>
          {person.name} {person.number}
          <button
            value={person.id}
            onClick={deletePerson}
          >
            Poista
          </button>
        </div>
      )
    })
}

const Notification = ({ message, style }) => {
  if (message === null) {
    return null
  }

  return (
    <div className={style}>
      {message}
    </div>
  )
}


const App = () => {
  const [
    persons,
    setPersons
  ] = useState([])




  const hook = () => {
    console.log("effect")
    personService
      .getAll()
      .then(returnedPerson => {
        console.log("promise fulfilled")
        setPersons(returnedPerson)
      })
  }
  useEffect(hook, [])
  console.log(
    "render",
    persons.length,
    "persons"
  )

  const [
    newName,
    setNewName
  ] = useState("")
  const [
    newNumber,
    setNewNumber
  ] = useState("")
  const [
    newSearch,
    setNewSearch
  ] = useState("")

  const [
    errorMessage, 
    setErrorMessage
  ] = useState('')

  const [
    errorStyle,
    setErrorStyle
  ] = useState('normal')

  const handleErrorMessage = props => {
    console.log(props)
  
    setErrorMessage(props)
    setTimeout(() => {
      setErrorMessage(null)
      setErrorStyle('normal')
    }, 
      3000
    )
  }




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
    console.log(
      "event.target.value: ",
      event.target.value
    )
    console.log(
      "newSearch: ",
      newSearch
    )
    setNewSearch(event.target.value)
    console.log(
      "newSearch: ",
      newSearch
    )
  }

  const deletePerson = event => {
    event.preventDefault()
    const id = "" + event.target.value
    const person = persons.find(
      person => {
        return "" + person.id === id
      }
    )

    const saaPoistaa = window.confirm(
      `Saako henkilön ${
        person.name
      } poistaa?`
    )
    if (saaPoistaa) {
      personService
        .deletePersonById(id)
        .then(() => {
          setErrorStyle('success')
          handleErrorMessage('Henkilön poisto onnistui!')
          return hook()
          }
        )
        .catch(() => {
          setErrorStyle('error')
          handleErrorMessage('Henkilö oli jo poistettu!')
          return hook()
        }
        )
    }
  }

  const addPerson = event => {
    event.preventDefault()
    if (newName === '') {
      setErrorStyle('error')
      handleErrorMessage('Et ole vielä syöttänyt nimeä.')
      
    } else {
      if (
        !persons
          .map(person => person.name)
          .includes(newName)
      ) {
        const person = {
          name: newName,
          number: newNumber
        }
        personService
          .create(person)
          .then(returnedPerson => {

            setPersons(
              persons.concat(
                returnedPerson
              )
            )
            setErrorStyle('success')
            handleErrorMessage('Lisääminen onnistui!')

            setNewName("")
            setNewNumber("")
            setNewSearch("")
          })
      } else {
        const korvataanNumero = window.confirm(
          `${newName} on jo luettelossa. Korvataanko vanha numero uudella?`
        )
        if (korvataanNumero) {
          const uusiPerson = {
            name: newName,
            number: newNumber
          }
          const vanhaPerson = persons.find(
            person =>
              person.name === newName
          )
          personService
            .update(
              vanhaPerson.id,
              uusiPerson
            )
            .then(() => {
              setErrorStyle('success')
              handleErrorMessage(`Päivittäminen onnistui!`)
              return hook()
            })
            .catch(() => {
              setErrorStyle('error')
              handleErrorMessage('Henkilö oli jo poistettu, ei voi päivittää!')
              return hook()
            }
            )
        }
      }
    }
  }

  return (
    <div>
      <h2>Puhelinluettelo</h2>

      <Notification message={errorMessage} style={errorStyle} />

      <Input
        text={"Hae: "}
        newSomething={newSearch}
        handleNewSomething={
          handleNewSearch
        }
      />
      <ReadPerson
        addPerson={addPerson}
        newName={newName}
        handleNewName={handleNewName}
        newNumber={newNumber}
        handleNewNumber={
          handleNewNumber
        }
      />

      <h2>Numerot</h2>

      <Listing
        persons={persons}
        newSearch={newSearch}
        deletePerson={deletePerson}
      />
    </div>
  )
}

export default App
