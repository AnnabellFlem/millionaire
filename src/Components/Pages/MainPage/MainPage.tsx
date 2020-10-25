import React, { useState } from 'react'
import StartPage from '../StartPage'
import GamePage from '../GamePage'
import ResultPage from '../ResultPage'

const MainPage: React.FC = () => {
  const [startGame, setStartGame] = useState(true)
  const [endGame, setEndGame] = useState(false)
  const [win, setWin] = useState(false)
  const [currentNumberQuestion, setCurrentNumberQuestion] = useState(0)

  const handleClick = (e: any) => {
    if (e.currentTarget.value === 'start') {
      // setCurrentNumberQuestion(0)
      setStartGame(false)
    } else if (e.currentTarget.value === 'retry') {
      setCurrentNumberQuestion(0)
      setStartGame(true)
      setEndGame(false)
    } else return null
  }

  const handleEndGame = (b: boolean) => {
    setEndGame(true)
    setWin(b)
  }

  const handleQuestion = (q: number) => {
    setCurrentNumberQuestion(q)
  }

  return (
    <>
      {startGame && !endGame && <StartPage onButtonClick={handleClick} />}
      {!startGame && !endGame && (
        <GamePage
          handleQuestion={handleQuestion}
          handleEndGame={handleEndGame}
          currentNumberQuestion={currentNumberQuestion}
        />
      )}
      {!startGame && endGame && (
        <ResultPage
          currentNumberQuestion={currentNumberQuestion}
          onButtonClick={handleClick}
          win={win}
        />
      )}
    </>
  )
}

export default MainPage
