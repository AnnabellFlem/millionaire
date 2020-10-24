import React, { useEffect, useState } from 'react'
import './MainLayout.css'
import AnswerCell from '../../../BaseComponents/AnswerCell'
import Button from '../../../BaseComponents/Button'
import {
  MOCK__QUESTIONS as questions,
  MOCK__MONEY as money,
} from '../../../../Services/mockQuestions'
import useMedia from 'use-media'
import { MEDIA_QUERY_MOBILE } from '../../../../Constants/MediaQueries'

const MainLayout: React.FC = () => {
  const isWide = useMedia(MEDIA_QUERY_MOBILE)
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0)
  const [selectedAnswersArray, setSelectedAnswersArray] = useState<Array<any>>(
    [],
  )
  const [answersArray, setAnswersArrayArray] = useState<Array<any>>([])

  const currentQuestion = questions[currentQuestionNumber]

  useEffect(() => {
    setAnswersArrayArray(currentQuestion.answers)
  })

  const defaultMainLayoutClassName = 'MainLayout'

  const handleChange = (e: any) => {
    const currID = e.currentTarget.id
    const index = selectedAnswersArray.indexOf(currID)
    if (index > -1) {
      selectedAnswersArray.splice(index, 1)
      return setSelectedAnswersArray(selectedAnswersArray)
    }
    return setSelectedAnswersArray([...selectedAnswersArray, currID])
  }

  const handleCheck = () => {
    // setResultArray(currentQuestion.answers.filter(item => item.right))
    // const userAnswers = currentQuestion.answers.filter((item, index) => {
    //   console.log(item, selectedAnswersArray)
    //   if (!item.right && selectedAnswersArray.includes(item.id)) {
    //     return item
    //   }
    // })
    //
    // setResultArray([...resultArray, ...userAnswers])
  }

  const DesktopList = (array: Array<any>, result = undefined) => {
    return (
      <>
        {array.map(item => {
          return (
            <li
              key={item.id}
              className={`${defaultMainLayoutClassName}__answers-item`}
            >
              <AnswerCell
                variant={item.variant}
                id={item.id}
                name="answer"
                correct={result}
                wrong={result}
                onChange={handleChange}
              >
                {item.answer}
              </AnswerCell>
            </li>
          )
        })}
      </>
    )
  }

  const MobileList = (array: Array<any>) => {
    return (
      <>
        {array.map(item => {
          return (
            <li
              key={item.id}
              className={`${defaultMainLayoutClassName}__answers-item`}
            >
              <AnswerCell
                variant={item.variant}
                sizeCell="s"
                id={item.id}
                name="answer"
              >
                {item.answer}
              </AnswerCell>
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
              {isWide ? DesktopList(answersArray) : MobileList(answersArray)}
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
