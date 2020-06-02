console.log('wds store')
import { createStore } from 'redux'
import { wrapStore } from 'webext-redux'
import { combineReducers } from 'redux'
import { count } from './countReducer'

export const initializeStore = () => {
  console.log('wds initializing store...')

  const store = createStore(
    combineReducers({
      count
    })
  )

  wrapStore(store, { portName: 'example' })

  return store
}