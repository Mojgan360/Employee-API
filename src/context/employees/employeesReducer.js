import {
  GET_EMPLOYEES_BEGIN,
  GET_EMPLOYEES_SUCCESS,
  GET_EMPLOYEES_ERROR,
} from '../../actions'

const employees_reducer = (state, action) => {
  const { type, payload } = action

  if (type === GET_EMPLOYEES_BEGIN) {
    return { ...state, employees_loading: true }
  }

  if (type === GET_EMPLOYEES_SUCCESS) {
    return {
      ...state,
      employees_loading: false,
      employees: payload,
      [payload.name]: payload.data,
    }
  }

  if (type === GET_EMPLOYEES_ERROR) {
    return { ...state, employees_loading: false, employees_error: true }
  }

  return state
  // eslint-disable-next-line no-unreachable
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default employees_reducer
