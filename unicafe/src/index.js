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

const Statistic = ({text, value}) => (
  <div>
    <p>{text} {value}</p>
  </div>
)

const Statistics = ({good, neutral, bad}) => {

  let summa = good + neutral + bad
  let pisteet = 1*good + 0*neutral + (-1)*bad
  let keskiarvo = good == 0 ? 0 : pisteet / summa
  let prosenttia = good == 0 ? 0 : 100 * good / summa

  if (summa === 0) return(
  <div>
    <p>Ei yhtään palautetta annettu</p>
  </div>
  )

  return (
    <div>
      <h1>Statistiikka</h1>
      <Statistic text='Hyvä' value={good}/>
      <Statistic text='Neutraali' value = {neutral}/>
      <Statistic text='Huono' value = {bad}/>
      <Statistic text='Yhteensä' value = { summa } />
      <Statistic text='Keskiarvo' value = { keskiarvo } />
      <Statistic text='Positiivisia' value = { prosenttia + ' %'}/>
    </div>
  )
}


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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)