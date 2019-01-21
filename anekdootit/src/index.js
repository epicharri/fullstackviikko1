import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>{text}</button>
)



const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [aaniluettelo, setAanet] = useState(props.aaniluettelo)

  const arpominen = () => {
    setSelected(Math.floor(Math.random()*6))
  }

  const aanestys = () => {
      
      const kopio = [...aaniluettelo]
      kopio.fill(kopio[selected] + 1, selected, selected+1)
      setAanet(kopio)
  }

  return (
    <div>
      <p>
        <Button handleClick={arpominen} text='Arvo uusi'></Button>

        <Button handleClick={aanestys} text='Äänestä'></Button>
      </p>
     <p>{props.anecdotes[selected]}</p>
     <p>Ääniä {aaniluettelo[selected]}</p>
    </div>
  )
}

const aaniluettelo = [0,0,0,0,0,0]

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} aaniluettelo={aaniluettelo} />,
  document.getElementById('root')
)