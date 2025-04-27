import React, { useState, useEffect } from 'react'
import './Quiz.css'

const Quiz = ({ category, questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(null)
  const [options, setOptions] = useState([])
  const [answerFeedback, setAnswerFeedback] = useState('')
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [hasAnswered, setHasAnswered] = useState(false)

  const generateQuestion = () => {
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)]

    let answers = [randomQuestion.country]
    while (answers.length < 4) {
      const randomCountry = questions[Math.floor(Math.random() * questions.length)].country
      if (!answers.includes(randomCountry)) {
        answers.push(randomCountry)
      }
    }

    answers = answers.sort(() => Math.random() - 0.5)

    setCurrentQuestion(randomQuestion)
    setOptions(answers)
    setAnswerFeedback('')
    setSelectedAnswer('')
    setHasAnswered(false)
  }

const handleAnswerClick = (answer) => {
    if (hasAnswered) return
    
    setSelectedAnswer(answer)
    setHasAnswered(true)

    const feedbackText = answer === currentQuestion.country
      ? `Correct! The answer is ${currentQuestion.country}`
      : `Wrong! The correct answer was ${currentQuestion.country}`

    const finalFeedback = currentQuestion.desc
      ? `${feedbackText}! <br/> ${currentQuestion.desc}`
      : `${feedbackText}!`;
  
    setAnswerFeedback(<span dangerouslySetInnerHTML={{ __html: finalFeedback }} />)
 }

  useEffect(() => {
    console.log('Questions received')
    generateQuestion()
  }, [questions])

  if (!currentQuestion) return <div>Loading...</div>

  const capitalizedCategory = category.charAt(0).toUpperCase() + category.slice(1)
  return (
    <div className="container">
      <h1>{capitalizedCategory}</h1>
      <img src={currentQuestion.image} alt="bollard" />
      <div className="feedback">{answerFeedback}</div>
      <ul className='options-grid'>
        {options.map((option, index) => (
          <li
            key={index}
            className={`option-item ${selectedAnswer === option ? (option === currentQuestion.country ? 'correct' : 'wrong') : ''} ${hasAnswered ? 'disabled' : ''}`}
            onClick={() => handleAnswerClick(option)}
          >
            {option}
          </li>
        ))}
      </ul>
      <button onClick={generateQuestion} disabled={!hasAnswered}>
        Next
      </button>
    </div>
  )
}

export default Quiz
