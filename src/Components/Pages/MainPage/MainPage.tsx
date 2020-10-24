import React, { useState } from 'react'
import StartPage from '../StartPage'
import GamePage from '../GamePage'
import ResultPage from '../ResultPage'

const MainPage: React.FC = () => {
  const [startGame, setStartGame] = useState(true)
  const [endGame, setEndGame] = useState(false)

  const handleClick = (e: any) => {
    if (e.currentTarget.value === 'start') {
      setStartGame(false)
    }
    if (e.currentTarget.value === 'retry') {
      setStartGame(true)
      setEndGame(false)
    } else return null
  }

  return (
    <>
      {startGame && !endGame && <StartPage onButtonClick={handleClick} />}
      {!startGame && !endGame && <GamePage />}
      {!startGame && endGame && <ResultPage onButtonClick={handleClick} />}
    </>
  )
}

export default MainPage
