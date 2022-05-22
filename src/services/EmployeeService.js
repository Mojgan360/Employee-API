import httpClient from '../utils/axios'

const getAllEmployees = () => {
  return httpClient.get('/employees')
}
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAllEmployees,
}
