import React, { useEffect, useState } from 'react'
import './MainLayout.css'
import AnswerCell from '../../../BaseComponents/AnswerCell'
import Button from '../../../BaseComponents/Button'
import { questionArray, moneyArray } from '../../../../Services/mockData'
import useMedia from 'use-media'
import { MEDIA_QUERY_MOBILE } from '../../../../Constants/MediaQueries'

type Type = undefined | boolean

type MainLayoutType = {
  handleCurrentQuestion: (question: number) => void
  currentNumberQuestion: number
  handleEndGame: (b: boolean) => void
}

const MainLayout: React.FC<MainLayoutType> = ({
  handleCurrentQuestion,
  currentNumberQuestion,
  handleEndGame,
}) => {
  const isWide = useMedia(MEDIA_QUERY_MOBILE)
  const lastRound = moneyArray.length
  const [answersArray, setAnswersArray] = useState<Array<any>>([])
  const [resultArray, setResultArray] = useState<Array<any>>([])

  const currentQuestion = questionArray[currentNumberQuestion]

  const defaultMainLayoutClassName = 'MainLayout'

  const arrayEquals = (a: Array<any>, b: Array<any>) => {
    return (
      Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index])
    )
  }

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
      return null
    })

    setResultArray([...rightAns, ...userAns.filter(item => !item.right)])

    setTimeout(() => {
      if (arrayEquals(rightAns, userAns)) {
        setAnswersArray([])
        setResultArray([])
        currentNumberQuestion === lastRound - 1
          ? handleEndGame(true)
          : handleCurrentQuestion(currentNumberQuestion + 1)
      } else return handleEndGame(false)
    }, 2000)
  }

  useEffect(() => {
    handleCurrentQuestion(currentNumberQuestion)
  }, [currentNumberQuestion, handleCurrentQuestion])

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
