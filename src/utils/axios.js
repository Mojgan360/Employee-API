import axios from 'axios'
const { REACT_APP_AUTH_KEY } = process.env
const instance = axios.create({
  baseURL: 'https://api.1337co.de/v3',
  headers: {
    Authorization: REACT_APP_AUTH_KEY,
  },
})

export default instance
