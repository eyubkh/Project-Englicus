import { DATA } from '../CONSTANS'

const dataInitialState = {
  isLoading: true,
  api: [],
  current: 0
}

const dataReducer = (state = dataInitialState, action) => {
  switch (action.type) {
    case DATA.correct:
      state.api.splice(state.current, 1)
      state = {
        ...state,
        current: Math.floor(Math.random() * state.api.length)
      }
      return state
    case DATA.initialState: {
      state = {
        isLoading: false,
        api: action.payload,
        current: Math.floor(Math.random() * action.payload.length)
      }
      return state
    }
    case DATA.changeCurrent:
      state = {
        ...state,
        current: Math.floor(Math.random() * state.api.length)
      }
      return state
    default:
      return state
  }
}

export default dataReducer