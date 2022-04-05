import thunk from 'redux-thunk'
import { combineReducers, createStore, applyMiddleware } from "redux"
import data from './reducer/dataReducer'
import meta from './reducer/metaReducer'
import progress from './reducer/progressReducer'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
const reducer = combineReducers({
  data,
  meta,
  progress
})

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store