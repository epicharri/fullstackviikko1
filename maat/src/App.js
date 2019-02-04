import React, {
  useState,
  useEffect
} from "react"
import maaService from "./services/maat"

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

  if (kivatMaat.length > 10) {
    return (
      <div>
        <p>
          Tuloksia yli 10, tarkenna
          hakuehtoa :)
        </p>
      </div>
    )
  } else {
    return kivatMaat.map(maa => {
      return (
        <div key={maa.name}>
          {maa.name}
        </div>
      )
    })
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
