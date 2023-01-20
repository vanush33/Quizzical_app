import React from 'react'
import Question from './components/question'
import {nanoid} from 'nanoid'

export default function App() {
  //watch when the quiz is started
  const [quiz, setQuiz] = React.useState(false)
  //handle all questions for quiz
  const [questions, setQuestions] = React.useState([])
  //watch if quiz is done
  const [isSubmitted, setIsSubmitted] = React.useState(false)
  //starting quiz
  function startQuiz() {
    setQuiz(prevQuiz => !prevQuiz)
  }
  //getting questions from API
  React.useEffect(function() {
    fetch("https://opentdb.com/api.php?amount=5&category=31")
          .then(res => res.json())
          .then(data => setQuestions(data.results))
  }, [])
  //mapping quiz data to return object
  const quizData = questions.map((item, index) => {
    return (
      <Question key={nanoid()}
          title={item.question}
          answer={item.correct_answer}
          options={item.incorrect_answers}
          id={index}
          isSubmitted={isSubmitted}
      />
    )
  })
  //end or restart quiz
  function submit() {
    setIsSubmitted(prevSubmitted => !prevSubmitted)
  }

  return (
    <div className="App">
      {//conditionally rendering start page or questions
        !quiz ? 
        <div className="main">
          <h1 className="main--heading">Quizzical</h1>
          <p className='main--text'>Some description if needed</p>
          <button className='main--button button' onClick={startQuiz}>Start quiz</button>
        </div> : 
        <div className='quiz'>
          {quizData}
          <button className='button quiz--button' onClick={submit}>{isSubmitted ? "Restart quiz" :"Check answers"}</button>
        </div>
      }
    </div>
  )
}
