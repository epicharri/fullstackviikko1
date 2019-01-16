import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack -sovelluskehitys'
  const part1 = {
      name: 'Reactin perusteet',
      exercises: 10
  }
  const part2 = {
      name: 'Tiedonvälitys propseilla',
      exercises: 7
  }
  const part3 = {
      name: 'Komponenttien tila',
      exercises: 14
  }

    return (
        <>
            <Header course={course} />
            <Content part={part1} />
            <Content part={part2} />
            <Content part={part3} />

            <Total total={part1.exercises+part2.exercises+part3.exercises} />    
        </>
    )
}
const Header = (props) => {
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part part = {props.part} />
        </div>
    )
}

const Part = (props) => {

    return (
        <div>
            <p>
                {props.part.name} {props.part.exercises}
            </p>
        </div>
    )
}

const Total = (props) => {
    return (
        <p>
            yhteensä {props.total} tehtävää
        </p>

    )
}



ReactDOM.render(<App />, document.getElementById('root'))