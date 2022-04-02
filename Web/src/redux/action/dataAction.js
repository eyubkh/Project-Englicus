import { DATA } from '../CONSTANS'

export const correct = (position) => ({
  type: DATA.correct,
  payload: position
})

export const initalState = () => {
  return async dispatch => {
    const payload = await window.fetch('http://localhost:3003/irregularVerb/fill/basic')
      .then(res => res.json())
      .then(data => data)
      console.log(payload)
    dispatch({
      type: DATA.initialState,
      payload
    })
  }
}