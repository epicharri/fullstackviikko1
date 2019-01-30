import React from 'react'

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
        {props.course.parts.map(part => {
          return <Part key={part.id} part={part} />
        })}
      </div>
    )
  }

  const Part = props => {
    return (
      <div>
        <p>
          {props.part.name} {props.part.exercises}
        </p>
      </div>
    )
  }

  const Total = props => {
    const { course } = props

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

export default Course