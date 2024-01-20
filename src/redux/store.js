import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authReducer } from './auth-reducer'
import { initialyzeAppReducer } from './initialyze-reducer'

const rootReducer = combineReducers({
  auth: authReducer,
  initialyze: initialyzeAppReducer,
})

export const store = configureStore({ reducer: rootReducer })

window.store = store
