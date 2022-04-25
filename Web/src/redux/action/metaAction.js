import { META } from '../CONSTANS'

export const randomNumber = (stateLength) => ({
  type: META.randomNumber,
  payload: stateLength
})

export const message = (string) => ({
  type: META.message,
  payload: string
})

export const isChecking = (boolean) => ({
  type: META.isChecking,
  payload: boolean
})
export const isCorrect = (boolean) => ({
  type: META.isCorrect,
  payload: boolean
})

export const textFieldValue = (string) => ({
  type: META.textFieldValue,
  payload: string
})

export const progressBar = (number) => ({
  type: META.progressBar,
  payload: number
})

export const reset = () => ({
  type: META.reset
})