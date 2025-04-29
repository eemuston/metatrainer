import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Quiz from './components/Quiz/Quiz'
import NotReady from './components/NotReady/NotReady'
import { useParams } from 'react-router-dom'
import './App.css'
import { bollardQuestions, flagQuestions, signQuestions, carQuestions, plateQuestions } from './data/questions'

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/NotReady" element={<NotReady />} />
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
  let type = null;

  if (category === 'bollards'){ 
    questions = bollardQuestions
    type='tall'}
  if (category === 'flags'){
    questions = flagQuestions
    type='wide'
  } 
  if (category === 'streetSigns'){
    questions = signQuestions
    type='tall'
  } 
  if (category === 'cars'){
    questions = carQuestions
    type='wide'
  }
  if (category === 'licensePlates'){
    questions = plateQuestions
    type='wide'
  } 

  return <Quiz category={category} questions={questions} styleType={type} />
}

export default App