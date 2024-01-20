import { authAPI } from '../API/authAPI'

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
const SET_IS_REGISTRATION_SUCCESS = 'SET_IS_REGISTRATION_SUCCESS'

const initialState = {
  userId: null,
  userName: null,
  userRole: null,
  isAuth: false,
  isRegistrationSuccess: false, // if registration success, redirect to login
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        userId: action.payload.id,
        userName: action.payload.name,
        userRole: action.payload.role,
        isAuth: action.payload.isAuth,
      }

    case SET_IS_REGISTRATION_SUCCESS:
      return {
        ...state,
        isRegistrationSuccess: action.value,
      }

    default:
      return state
  }
}

// action creators

// set auth user data (id, name, role and flag isAuth)
const setAuthUserData = (payload) => ({
  type: SET_AUTH_USER_DATA,
  payload,
})

const setIsRegistrationSuccess = (value) => ({
  type: SET_IS_REGISTRATION_SUCCESS,
  value,
})

// thunks

// registratin new user
export const registration = (regData) => (dispatch) => {
  authAPI.registration(regData).then((res) => {
    if (res.statusCode === 1) {
      dispatch(setIsRegistrationSuccess(true))
    } else {
      console.log(res)
    }
  })
}

// login user
export const login = (loginData) => (dispatch) => {
  authAPI.login(loginData).then((res) => {
    if (res.statusCode === 1) {
      dispatch(setAuthUserData({ ...res.userData, isAuth: true }))
      localStorage.setItem('token', res.token)
    } else {
      console.log(res)
    }
  })
}

// verify is user authorized and token on expired
export const authMe = () => (dispatch) => {
  if (localStorage.getItem('token')) {
    const token = localStorage.getItem('token')
    return authAPI.authMe(token).then((res) => {
      if (res.statusCode === 1) {
        dispatch(setAuthUserData({ ...res.userData, isAuth: true }))
      } else {
        console.log(res)
      }
    })
  } else {
    return new Promise((resolve) => resolve())
  }
}

export const logout = () => (dispatch) => {
  localStorage.removeItem('token')
  dispatch(setAuthUserData({ id: null, name: null, role: null, isAuth: false }))
}
