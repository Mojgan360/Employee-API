import React from 'react'
import { render } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import EmployeesState, { useEmployee } from './EmployeesState'
import EmployeesContext from './employeesContext'

const state = { employees: [] }
const dispatch = jest.fn()

const wrapper = ({ children }) => (
  <EmployeesContext.Provider value={{ state, dispatch }}>
    {children}
  </EmployeesContext.Provider>
)

const mockUseContext = jest.fn().mockImplementation(() => ({ state, dispatch }))

React.useContext = mockUseContext

describe('useEmployee test', () => {
  test('should return present employees  with its state and dispatch function', () => {
    render(<EmployeesState />)
    const { result } = renderHook(() => useEmployee(), { wrapper })

    expect(result.current.state.employees.length).toBe(0)

    expect(result.current).toEqual({ state, dispatch })
  })
})
