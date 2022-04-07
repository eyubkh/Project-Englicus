import { PROGRESS } from '../CONSTANS'

export const barProgress = () => ({
  type: PROGRESS.barProgress
})

export const barRatio = (length) => ({
  type: PROGRESS.barRatio,
  payload: length
})

export const barReset = () => ({
  type: PROGRESS.barReset
})