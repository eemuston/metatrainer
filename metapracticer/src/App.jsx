import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Quiz from './components/Quiz/Quiz'
import { bollardsQuestions } from './data/questions'
import { useParams } from 'react-router-dom'
import './App.css'
// import streetSignsQuestions from './data/streetSigns' // Uncomment when available
// import carsQuestions from './data/cars' // Uncomment when available

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

  if (category === 'bollards') {
    questions = bollardsQuestions }
  // if (category === 'streetSigns') questions = streetSignsQuestions
  // if (category === 'cars') questions = carsQuestions

  return <Quiz category={category} questions={questions} />
}

export default App