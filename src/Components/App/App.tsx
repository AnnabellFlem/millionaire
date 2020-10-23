import React from 'react'
import MainPage from '../Pages/GamePage/MainPage'
import './App.css'
import StartPage from '../Pages/StartPage'
import ResultPage from '../Pages/ResultPage'
import AnswerCell from '../AnswerCell'
import AnswerCellIcon from '../../assets/AnswerCellIcon'

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <MainPage /> */}
      {/* <MoneyCell disabled size='s' >$1,000,000</MoneyCell> */}
      <ResultPage />
      {/* <AnswerCell id="a" variant="A" >10 years</AnswerCell> */}
      {/* <MainPage /> */}
    </div>
  )
}

export default App
