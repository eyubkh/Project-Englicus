import { DATA } from '../CONSTANS'

export const correct = () => ({
  type: DATA.correct
})

export const changeCurrent = () => ({
  type: DATA.changeCurrent
})

export const initialState = () => {
  return async dispatch => {
    const payload = await window.fetch('http://localhost:3003/irregularVerb/fill/basic')
      .then(res => res.json())
      .then(data => data)
    dispatch({
      type: DATA.initialState,
      payload
    })
  }
}
