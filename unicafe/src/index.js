import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Display = ({text, value}) => (
  <div>
    <p>{text} {value}</p>
  </div>
)

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)



const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
    console.log('Good!')
  }
  
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    console.log('Neutral!')
  }
  
  const handleBadClick = () => {
    setBad(bad + 1)
    console.log('Bad!')
  }



  return (
    <div class="container">
      <h1>Anna palautetta</h1>
      <>
        <Button handleClick={handleGoodClick} text='hyvä'></Button>
        <Button handleClick={handleNeutralClick} text='neutraali'></Button>
        <Button handleClick={handleBadClick} text='huono'></Button>
      </>
      <h1>Statistiikka</h1>
      <Display text='hyvä' value={good}/>
      <Display text='neutraali' value = {neutral}/>
      <Display text='huono' value = {bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)