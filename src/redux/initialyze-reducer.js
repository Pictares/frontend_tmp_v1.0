import { authAPI } from '../API/authAPI'
import { authMe } from './auth-reducer'

const SET_INITIALYZED = 'SET_INITIALYZED'

const initialState = {
  isInitialyzed: false,
}

export const initialyzeAppReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALYZED:
      return {
        ...state,
        isInitialyzed: action.value,
      }

    default:
      return state
  }
}

// ac

const setInitialyzedSuccess = (value) => ({
  type: SET_INITIALYZED,
  value,
})

// thunk

export const initialyzeApp = () => (dispatch) => {
  const promise = dispatch(authMe())
  promise.then(() => {
    dispatch(setInitialyzedSuccess(true))
  })
}
