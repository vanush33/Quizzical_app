import React, {createContext} from 'react'
import Question from './question'
import {ScoreContext} from './ScoreContext'

export default function Quiz() {
    const [isSubmitted, setIsSubmitted] = React.useState(false)
    const [questions, setQuestions] = React.useState([])
    const [score, setScore] = React.useState(0)

    React.useEffect(function() {
        fetch("https://opentdb.com/api.php?amount=5&category=31")
              .then(res => res.json())
              .then(data => setQuestions(data.results))
    }, [])

    const quizData = questions.map((item, index) => {
        return (
          <Question key={index}
              title={item.question}
              answer={item.correct_answer}
              options={item.incorrect_answers}
              id={index}
              isSubmitted={isSubmitted}
          />
        )
    })
    
    function submitQuiz(event) {
        event.preventDefault()
        setIsSubmitted(prevSubmitted => !prevSubmitted)
    }

    return(
        <ScoreContext.Provider value={score}>
            <form className='quiz'>
                {quizData}
                <div className='quiz--submit'>
                    <p className='quiz--score'>{isSubmitted ? `You scored ${score}/${quizData.length} correct answers` : ""}</p>
                    <button className='button quiz--button' onClick={submitQuiz}>{isSubmitted ? "Play again" : "Check answers"}</button>
                </div>
            </form>
        </ScoreContext.Provider>
    )
}