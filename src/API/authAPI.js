import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://127.0.0.1:5000/api/',
})

export const authAPI = {
  registration({ email, password, name }) {
    return instance
      .post('registration', {
        email,
        password,
        name,
      })
      .then((res) => {
        return res.data
      })
      .catch((error) => {
        console.log(error)
        return error
      })
  },

  login({ email, password }) {
    return instance
      .post('auth/login', {
        email,
        password,
      })
      .then((res) => {
        return res.data
      })
      .catch((error) => {
        console.log(error)
        return error.response.data
      })
  },

  authMe(token) {
    return instance
      .get('auth/me', {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        return res.data
      })
      .catch((error) => {
        return error.response.data
      })
  },
}
