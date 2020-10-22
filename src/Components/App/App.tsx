import React from 'react'
import MainPage from '../Pages/MainPage'
import './App.css'
import StartPage from '../Pages/StartPage'
import ResultPage from '../Pages/ResultPage'
import AnswerCell from '../AnswerCell'
import AnswerCellIcon from '../../assets/AnswerCellIcon'

const App: React.FC = () => {
  return (
    <div className="App">
      { /* <MainPage /> */ }
      { /* <MoneyCell disabled size='s' >$1,000,000</MoneyCell> */ }
      { /* <ResultPage /> */ }
      <AnswerCell variant="A">10 years</AnswerCell>
    </div>
  )
}

export default App
