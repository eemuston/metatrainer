import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Quiz.css'

const Quiz = ({ category, questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(null)
  const [options, setOptions] = useState([])
  const [answerFeedback, setAnswerFeedback] = useState('')
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [hasAnswered, setHasAnswered] = useState(false)
  const [round, setRound] = useState(1)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [remainingQuestions, setRemainingQuestions] = useState([...questions])
  const [gameFinished, setGameFinished] = useState(false)
  const navigate = useNavigate()

  const generateQuestion = () => {
    if (round > 9) {
      setGameFinished(true)
      return
    }

    const randomIndex = Math.floor(Math.random() * remainingQuestions.length)
    const randomQuestion = remainingQuestions[randomIndex]

    let answers = [randomQuestion.country]
    while (answers.length < 4) {
      const randomCountry = questions[Math.floor(Math.random() * questions.length)].country
      if (!answers.includes(randomCountry)) {
        answers.push(randomCountry)
      }
    }

    answers = answers.sort(() => Math.random() - 0.5)

    setRemainingQuestions(remainingQuestions.filter((q, index) => index !== randomIndex))

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
      ? `Correct`
      : `Wrong! The correct answer was ${currentQuestion.country}`

      const finalFeedback = (
        <div>
          <span>{feedbackText}!</span>
          <br />
          {currentQuestion.desc && (
            <>
            <div className='desc'>
              <span>{currentQuestion.desc}</span>
            </div>
            </>
          )}
          {currentQuestion.location ? (<div className="fblocation">Click the image to see the location!</div>) : (<></>)}
        </div>
      )

    setAnswerFeedback(finalFeedback)

    if (answer === currentQuestion.country) {
      setCorrectAnswers(correctAnswers + 1)
    }
  }

  const handleNextClick = () => {
    if (round < 10) {
      setRound(round + 1)
    }
    generateQuestion()
  }

  const handleFinish = () => {
    navigate('/')
  }

  useEffect(() => {
    generateQuestion()
  }, [questions])

  if (!currentQuestion) return <div>Loading...</div>

  const capitalizedCategory = category.charAt(0).toUpperCase() + category.slice(1)

  return (
    <div className="container">
      <h1>{capitalizedCategory}</h1>
      <h1>Round: {round} / 10</h1>
      {hasAnswered ? (<a href={currentQuestion.location} target='_blank'><img className='image-q' src={currentQuestion.image} alt="question" /></a>) : (<img className='image-q' src={currentQuestion.image} alt="question" />)}
      {gameFinished ? (<h1 className='finish'>Game Over</h1>) : ( <div className="feedback">{answerFeedback}</div>)}
      {gameFinished ? (<h1 className='finish'>Your Score {correctAnswers}/10</h1>) : 
      (<ul className="options-grid">
        {options.map((option, index) => (
          <li
            key={index}
            className={`option-item ${selectedAnswer === option ? (option === currentQuestion.country ? 'correct' : 'wrong') : ''} ${hasAnswered ? 'disabled' : ''}`}
            onClick={() => handleAnswerClick(option)}
          >
            {option}
          </li>
        ))}
      </ul>)}
      {gameFinished ? (<button onClick={handleFinish}>Finish</button>) :
      (<button onClick={handleNextClick} disabled={!hasAnswered || round > 10}>
        Next
      </button>)}
    </div>
  )
}

export default Quiz
