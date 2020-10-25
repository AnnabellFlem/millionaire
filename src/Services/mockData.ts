import configGame from './configGame.json'
import mockConfigGame from './mockConfigGame.json'
import { ConfigType, MoneyListType, QuestionListType } from '../Types'

console.log(111)
const configGameObj: ConfigType = JSON.parse(configGame as any)
console.log(222)

const mockConfigGameObj: ConfigType = JSON.parse(mockConfigGame as any)

const isValidData = (
  moneyArr: MoneyListType,
  questionsArr: QuestionListType,
) => {
  return moneyArr.length === questionsArr.length
}

const getMoney = () => {
  return isValidData(configGameObj.money, configGameObj.questions)
    ? configGameObj.money
    : mockConfigGameObj.money
}

const getQuestions = () => {
  console.log(configGameObj)
  return isValidData(configGameObj.money, configGameObj.questions)
    ? configGameObj.questions
    : mockConfigGameObj.questions
}

export const questionArray = getQuestions()

export const moneyArray = getMoney()
