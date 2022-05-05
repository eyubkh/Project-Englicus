import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './data/dataSlice'
import metaReducer from './meta/metaSlice'

const reducer = {
  data: dataReducer,
  meta: metaReducer
}

const store = configureStore({
  reducer
})

export default store
