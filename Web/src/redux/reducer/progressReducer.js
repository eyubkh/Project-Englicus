import { PROGRESS } from '../CONSTANS'

const progressInitialState = {
  bar: {
    ratio: 1,
    progress: 0
  }
}

const progressReducer = (state = progressInitialState, action) => {
  switch(action.type) {
    case PROGRESS.barRatio: 
      return {
        ...state,
        bar: {
          ...state.bar,
          ratio: 100 / action.payload
        }
      }
    case PROGRESS.barProgress:
      return {
        ...state,
        bar: {
          ...state.bar,
          progress: state.bar.progress + state.bar.ratio
        }
      }
    case  PROGRESS.barReset:
      return { 
        ...state,
        bar: {
          ...progressInitialState.bar
        }
      }
    default:
      return state
  }

}

export default progressReducer