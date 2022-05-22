import axios from 'axios'
// const { REACT_APP_AUTH_KEY } = process.env
const instance = axios.create({
  // baseURL: '  http://localhost:5000',

  baseURL: 'https://api.1337co.de/v3',
  headers: {
    Authorization:
      'api-key 14:2022-05-15:lucas.stenberg@1337.tech 882d55f88078823d8df53bf0144fb4a6f9f664ae0fe9a48f1613b6a38f709f37',
  },
})

export default instance
