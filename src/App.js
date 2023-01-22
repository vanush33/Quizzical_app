import React from 'react'
import Main from './components/main'
import Quiz from './components/quiz'

export default function App() {
  const [start, setStart] = React.useState(false)

  function startQuiz() {
    setStart(prevStart => !prevStart)
  }

  return (
    <div className="App">
     {start ? <Quiz /> : <Main startQuiz={startQuiz} />}
    </div>
  )
}
