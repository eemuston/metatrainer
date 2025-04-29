import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Quiz from './components/Quiz/Quiz'
import { useParams } from 'react-router-dom'
import './App.css'
import { bollardsQuestions, flagQuestions } from './data/questions'

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/quiz/:category"
            element={<QuizWithCategory />}
          />
        </Routes>
      </div>
    </Router>
  )
}

const QuizWithCategory = () => {
  const { category } = useParams()
  console.log(category)
  let questions = []

  if (category === 'bollards') questions = bollardsQuestions
  if (category === 'flags') questions = flagQuestions
  // if (category === 'googleCars') questions = googleCarsQuestions

  return <Quiz category={category} questions={questions} />
}

export default App