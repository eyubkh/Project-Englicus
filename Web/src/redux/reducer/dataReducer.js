import { DATA } from '../CONSTANS'

const dataInitialState = {
  isLoading: true,
  data: []
}

const dataReducer = (state = dataInitialState, action) => {
  switch (action.type) {
    case DATA.correct:
      state = {
        ...state,
        data: [...state.data.splice(action.payload, 1)]
      }
      return state
    case DATA.initialState: {
      state = {
        isLoading: false,
        data: action.payload
      }
      return state
    }
    default:
      return state
  }
}

export default dataReducer