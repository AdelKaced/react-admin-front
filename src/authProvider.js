import axios from 'axios'

const windowGlobal = typeof window !== 'undefined' && window

const authProvider = {
  login: ({ username, password }) => {
    return axios
      .post(`http://localhost:4000/users/auth`, {
        email: username,
        password
      })
      .then((res) => {
        const token = res.data.token
        windowGlobal.localStorage.setItem('token', token)
      })
  },
  getPermissions: () => {
    return Promise.resolve()
  },
  logout: () => {
    windowGlobal.localStorage.removeItem('token')
    return Promise.resolve()
  },
  checkError: (error) => {
    const status = error.status
    if (status === 401 || status === 403) {
      windowGlobal.localStorage.removeItem('token')
      return Promise.reject(error)
    }
    return Promise.resolve()
  },
  checkAuth: () => windowGlobal.localStorage.getItem('token') ? Promise.resolve() : Promise.reject(new Error('Vous êtes déconnecté'))
}

export default authProvider