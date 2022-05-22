import { render, screen, fireEvent } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import React from 'react'

import SearchContainer from '../SearchContainer'
import EmployeesState from '../../../../context/employees/EmployeesState'
import FilterState, { useFilter } from '../../../../context/filter/FilterState'
import EmployeesContext from '../../../../context/employees/employeesContext'
import FilterContext, {
  useEmployee,
} from '../../../../context/filter/filterContext'

import { Router, Route } from 'react-router'
import { createMemoryHistory } from 'history'
const history = createMemoryHistory()

const MockSearchContainer = () => {
  return (
    <EmployeesState>
      <FilterState>
        <SearchContainer />
      </FilterState>
    </EmployeesState>
  )
}

beforeEach(() => {
  // render(<MockSearchContainer />)
})

describe('SearchContainer', () => {
  //input
  it('should be initiality empty', () => {
    render(<MockSearchContainer />)
    const inputElement = screen.getByPlaceholderText(/Search For Employee/i)
    expect(inputElement.value).toBe('')
  })
  it('should be able to type a name', () => {
    render(<MockSearchContainer />)
    const inputElement = screen.getByPlaceholderText(/Search For Employee/i)
    fireEvent.change(inputElement, { target: { value: 'Lisa' } })
    expect(inputElement.value).toBe('Lisa')
  })
  //
})

const state = { all_employees: [], grid_view: true }
const dispatch = jest.fn()

const wrapper = ({ children }) => (
  <EmployeesState>
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  </EmployeesState>
)

const mockUseContext = jest.fn().mockImplementation(() => ({ state, dispatch }))

React.useContext = mockUseContext

describe('useFilter test', () => {
  test('should return present employees with its state and dispatch function', () => {
    const render = () => renderWithRouter()
    const renderWithRouter = (SearchContainer) =>
      render(
        <Router history={history}>
          <Route component={SearchContainer} />
        </Router>
      )
    // render(<SearchContainer />)
    const { result } = renderHook(() => useFilter(), { wrapper })

    // expect(result.current.state.all_employees.length).toBe(0)
    expect(result.current.state.grid_view).toBe(true)

    expect(result.current).toEqual({ state, dispatch })
  })
})
