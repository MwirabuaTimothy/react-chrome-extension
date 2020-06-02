import { createStore } from 'redux'
import { wrapStore } from 'webext-redux'
import { combineReducers } from 'redux'
import { count } from './countReducer'
import { PORT } from './constants'
export const initializeStore = () => {

  const store = createStore(
    combineReducers({
      count
    })
  )

  wrapStore(store, { 
    portName: PORT
  })

  return store
}