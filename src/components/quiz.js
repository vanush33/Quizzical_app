import React from 'react'
import Question from './question'

export default function Quiz() {
    const [isSubmitted, setIsSubmitted] = React.useState(false)
    const [questions, setQuestions] = React.useState([])

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
        <form className='quiz'>
            {quizData}
            <button className='button quiz--button' onClick={submitQuiz}>Check answers</button>
        </form>
    )
}