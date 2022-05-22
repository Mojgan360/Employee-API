import React, { useEffect, useReducer, useContext } from 'react'
import EmployeeService from '../../services/EmployeeService'
import EmployeesContext from './employeesContext'
import employeesReducer from './employeesReducer'

import {
  GET_EMPLOYEES_BEGIN,
  GET_EMPLOYEES_SUCCESS,
  GET_EMPLOYEES_ERROR,
  ONCHANGE_EMPLOYEE,
} from '../../actions'

const initialState = {
  employees_loading: false,
  employees_error: false,
  sets_employees: [],
  employees: [],
  employee: {
    name: '',
    email: '',
    phoneNumber: '',
    office: null || '',
    manager: null || '',
    orgUnit: null || '',
    mainText: null || '',
    gitHub: null || '',
    twitter: null || '',
    stackOverflow: null || '',
    linkedIn: null || '',
    imagePortraitUrl: null || '',
    imageWallOfLeetUrl: null || '',
    highlighted: false,
    published: false,
  },
}

const EmployeesState = ({ children }) => {
  const [state, dispatch] = useReducer(employeesReducer, initialState)

  const fetchEmployees = async () => {
    dispatch({ type: GET_EMPLOYEES_BEGIN })
    try {
      const response = await EmployeeService.getAllEmployees()
      const data = await response.data
      dispatch({ type: GET_EMPLOYEES_SUCCESS, payload: data })
    } catch (error) {
      dispatch({ type: GET_EMPLOYEES_ERROR })
    }
  }

  useEffect(() => {
    fetchEmployees()
  }, [])

  const onChangeHandel = (e) => {
    let { name, value } = e.target

    dispatch({ type: ONCHANGE_EMPLOYEE, payload: { name, value } })
  }

  return (
    <EmployeesContext.Provider
      value={{
        ...state,
        onChangeHandel,
      }}
    >
      {children}
    </EmployeesContext.Provider>
  )
}
export const useEmployee = () => useContext(EmployeesContext)

export default EmployeesState
