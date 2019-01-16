import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const course = 'Half Stack -sovelluskehitys'
    const parts = [
        {
            name: 'Reactin perusteet',
            exercises: 10
        },
        {
            name: 'Tiedonvälitys propseilla',
            exercises: 7
        },
        {
            name: 'Komponenttien tila',
            exercises: 14
        }
    ]

    return (
        <>
            <Header course={course} />
            <Content parts={parts} />
            <Total parts={parts} />    
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
            <Part part = {props.parts[0]} />
            <Part part = {props.parts[1]} />
            <Part part = {props.parts[2]} />
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
            yhteensä {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} tehtävää
        </p>

    )
}



ReactDOM.render(<App />, document.getElementById('root'))