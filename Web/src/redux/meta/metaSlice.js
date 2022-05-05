import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isCorrect: false,
  isChecking: false,
  textField: '',
  progressBar: 0
}

export const metaSlice = createSlice({
  name: 'meta',
  initialState,
  reducers: {
    textField: (state, action) => {
      state.textField = action.payload
    },
    isChecking: (state, action) => {
      state.isChecking = action.payload
    },
    isCorrect: (state, action) => {
      state.isCorrect = action.payload
    },
    progressBar: (state, action) => {
      state.progressBar = state.progressBar + action.payload
    },
    reset: (state) => {
      state.progressBar = 0
    }
  }
})

export const { textField, isChecking, isCorrect, progressBar, reset } = metaSlice.actions
export default metaSlice.reducer
