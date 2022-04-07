import { progressBar } from '@web'
import { META } from '../CONSTANS'

const metaInitialState = {
  randomNumber: 0,
  isCorrect: false,
  isChecking: false,
  textFieldValue: '',
  progressBar: {
    ratio: 1,
    progress: 0
  }
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
      if(action.payload) {
        return {
          ...state,
          progressBar: {
            ratio: 100 / action.payload,
            progress: 0
          }
        }
      }
      return {
        ...state,
        progressBar: {
          ...state.progressBar,
          progress: state.progressBar.progress + state.progressBar.ratio
        }
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