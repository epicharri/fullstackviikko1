import React, {
  useState,
  useEffect
} from "react"
import maaService from "./services/maat"
import "./App.css"

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

const Listing = props => {
  const { maat, newSearch } = props

  const kivatMaat = maat.filter(maa =>
    maa.name
      .toLocaleLowerCase()
      .includes(
        newSearch.toLocaleLowerCase()
      )
  )
  console.log(kivatMaat)

  if (kivatMaat.length === 1) {
    const maa = kivatMaat[0]
    return (
      <div>
        <h1>{maa.name}</h1>
        <br />
        <p>Capital: {maa.capital}</p>
        <p>
          Population: {maa.population}
        </p>
        <br />
        <h2>Languages</h2>
        <br />
        <ul>
          {maa.languages.map(
            language => (
              <li key={language.name}>
                {language.name}
              </li>
            )
          )}
        </ul>
        <img
          className="App-flag"
          src={maa.flag}
          alt="Flag of {maa.name} is coming here soon ..."
        />
      </div>
    )
  } else if (kivatMaat.length > 10) {
    return (
      <div>
        <p>
          Tuloksia yli 10, tarkenna
          hakuehtoa :)
        </p>
      </div>
    )
  } else {
    return (
      <div>
        {kivatMaat.map(maa => {
          return (
            <div key={maa.name}>
              {maa.name}
            </div>
          )
        })}
      </div>
    )
  }
}

const App = () => {
  const hooker = () => {
    maaService
      .getAll()
      .then(returnedMaat => {
        setMaat(returnedMaat)
      })
  }

  useEffect(hooker, [])

  const [
    newSearch,
    setNewSearch
  ] = useState("")

  const [maat, setMaat] = useState([])

  const handleNewSearch = event => {
    event.preventDefault()
    setNewSearch(event.target.value)
    hooker(event.target.value)
  }

  return (
    <div>
      <h2>Maat</h2>
      <Input
        text={"Hae: "}
        newSomething={newSearch}
        handleNewSomething={
          handleNewSearch
        }
      />
      <Listing
        maat={maat}
        newSearch={newSearch}
      />
    </div>
  )
}

export default App
