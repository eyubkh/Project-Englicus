import { progressBar } from '@web'
import { META } from '../CONSTANS'

const metaInitialState = {
  randomNumber: 0,
  isCorrect: false,
  isChecking: false,
  textFieldValue: '',
  progressBar: 0
}

const metaReducer = (state = metaInitialState, action) => {
  switch (action.type) {
    case META.isChecking:
      return { ...state, isChecking: action.payload }
    case META.message:
      return { ...state, message: action.payload }
    case META.isCorrect:
      return { ...state, isCorrect: action.payload }
    case META.randomNumber: {
      const randomNumber = Math.floor(Math.random() * action.payload)
      return { ...state, randomNumber }
    }
    case META.textFieldValue: 
      return { ...state, textFieldValue: action.payload }
    case META.progressBar:{
        return {
          ...state,
          progressBar: state.progressBar + action.payload
        }
    }
    case META.reset:
      state = metaInitialState
      return state
    default:
      return state
  }
}

export default metaReducer