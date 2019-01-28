import React from "react"
import ReactDOM from "react-dom"

const App = () => {
  const Course = props => {
    const { course } = props

    const Header = props => {
      return (
        <div>
          <h1>{course.name}</h1>
        </div>
      )
    }

    const Content = props => {
      return (
        <div>
          {props.course.parts.map((part, id) => {
            return <Part key={id} part={part} />
          })}
        </div>
      )
    }

    const Part = props => {
      return (
        <div key={props.part.id}>
          <p>
            {props.part.name} {props.part.exercises}
          </p>
        </div>
      )
    }

    const Total = props => {
      const { course } = props
      console.log("props", props)
      console.log("props.course", props.course)
      console.log("props.course.parts", props.course.parts)
      console.log("props.course.parts[0]", props.course.parts[0])

      return (
        <div>
          <p>
            yhteensä{" "}
            {course.parts
              .map(part => part.exercises)
              .reduce((total, luku) => total + luku)}{" "}
            tehtävää
          </p>
        </div>
      )
    }
    return (
      <>
        <Header course={course} />
        <Content course={course} />
        <Total course={course} />
      </>
    )
  }

  const course = {
    name: "Half Stack -sovelluskehitys",
    parts: [
      {
        name: "Reactin perusteet",
        exercises: 10,
        id: 1
      },
      {
        name: "Tiedonvälitys propseilla",
        exercises: 7,
        id: 2
      },
      {
        name: "Komponenttien tila",
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
