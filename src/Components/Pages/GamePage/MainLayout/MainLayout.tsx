import React, { useCallback, useEffect, useState } from 'react'
import './MainLayout.css'
import AnswerCell from '../../../BaseComponents/AnswerCell'
import Button from '../../../BaseComponents/Button'
import {
  MOCK__QUESTIONS as questions,
  MOCK__MONEY as money,
} from '../../../../Services/mockQuestions'
import useMedia from 'use-media'
import { MEDIA_QUERY_MOBILE } from '../../../../Constants/MediaQueries'

type Type = undefined | boolean

const MainLayout: React.FC = () => {
  const isWide = useMedia(MEDIA_QUERY_MOBILE)
  const lastRound = money.length
  const [endGame, setEndGame] = useState(false)
  const [currentNumberQuestion, setCurrentNumberQuestion] = useState(0)
  const [answersArray, setAnswersArray] = useState<Array<any>>([])
  const [resultArray, setResultArray] = useState<Array<any>>([])

  const currentQuestion = questions[currentNumberQuestion]

  const defaultMainLayoutClassName = 'MainLayout'

  const handleChange = (e: any) => {
    const currID = e.currentTarget.id
    const index = answersArray.indexOf(currID)
    if (index > -1) {
      answersArray.splice(index, 1)
      return setAnswersArray(answersArray)
    }
    return setAnswersArray([...answersArray, ...currID])
  }

  const handleCheck = () => {
    const rightAns = currentQuestion.answers.filter(item => item.right)

    const userAns = currentQuestion.answers.filter(item => {
      if (answersArray.includes(item.id)) {
        return item
      }
    })

    setResultArray([...rightAns, ...userAns.filter(item => !item.right)])

    setTimeout(() => {
      if (rightAns.length === userAns.filter(item => item.right).length) {
        setAnswersArray([])
        setResultArray([])
        setCurrentNumberQuestion(currentNumberQuestion + 1)
        // currentNumberQuestion === lastRound
        //   ? console.log('last')
        //   : setCurrentNumberQuestion(currentNumberQuestion + 1)
      } else return console.log('not equal')
    }, 2000)
  }

  // useEffect(() => {
  //   if (endGame) {
  //     const timeout = setTimeout(() => {
  //       setAnswersArray([])
  //       setResultArray([])
  //       setCurrentNumberQuestion(currentNumberQuestion + 1)
  //       setEndGame(false)
  //     }, 2000)
  //
  //     return () => clearTimeout(timeout)
  //   }
  // }, [endGame])

  const RenderList = (array: Array<any>, resArr: Array<any>) => {
    console.log(answersArray)
    return (
      <>
        {array.map(item => {
          const currItem = resArr.includes(item)
          return (
            <li
              key={item.id}
              className={`${defaultMainLayoutClassName}__answers-item`}
            >
              {isWide ? (
                <AnswerCell
                  variant={item.variant}
                  id={item.id}
                  name="answer"
                  correct={currItem ? item.right : undefined}
                  wrong={currItem ? !item.right : undefined}
                  onChange={handleChange}
                  checked={answersArray.includes(item.id)}
                >
                  {item.answer}
                </AnswerCell>
              ) : (
                <AnswerCell
                  variant={item.variant}
                  sizeCell="s"
                  id={item.id}
                  correct={currItem ? item.right : undefined}
                  wrong={currItem ? !item.right : undefined}
                  name="answer"
                  onChange={handleChange}
                  checked={answersArray.includes(item.id)}
                >
                  {item.answer}
                </AnswerCell>
              )}
            </li>
          )
        })}
      </>
    )
  }

  return (
    <main>
      <section className={defaultMainLayoutClassName}>
        <form className={`${defaultMainLayoutClassName}__answers-form`}>
          <div
            role="group"
            className={`${defaultMainLayoutClassName}__answers-fieldset`}
          >
            <legend className={`${defaultMainLayoutClassName}__answers-text`}>
              {currentQuestion.question}
            </legend>
            <ul className={`${defaultMainLayoutClassName}__answers-list`}>
              {RenderList(currentQuestion.answers, resultArray)}
            </ul>
          </div>
          {isWide ? (
            <Button type="button" onClick={handleCheck}>
              Check
            </Button>
          ) : (
            <Button type="button" size="s" onClick={handleCheck}>
              Check
            </Button>
          )}
        </form>
      </section>
    </main>
  )
}

export default MainLayout
