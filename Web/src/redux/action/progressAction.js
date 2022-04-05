import { PROGRESS } from '../CONSTANS'

export const barProgress = () => ({
  type: PROGRESS.barProgress
})

export const barRatio = (length) => ({
  type: PROGRESS.barRatio,
  payload: length
})