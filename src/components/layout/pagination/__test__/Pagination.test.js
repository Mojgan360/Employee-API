import { screen, cleanup } from '@testing-library/react'
import { renderHook } from '@testing-library/react-hooks'
import React from 'react'
import { Router, Route } from 'react-router'
import { createMemoryHistory } from 'history'

import Pagination from '../Pagination'
import EmployeesState from '../../../../context/employees/EmployeesState'
import { useFilter } from '../../../../context/filter/FilterState'
import FilterContext from '../../../../context/filter/filterContext'

const history = createMemoryHistory()

const MockSearchContainer = () => {
  const render = () => renderWithRouter()
  const renderWithRouter = () =>
    render(
      <Router history={history}>
        <Route component={Pagination} />
      </Router>
    )
}

afterEach(() => {
  cleanup()
})
describe('PaginationContainer', () => {
  const state = { filtered_employees: [], grid_view: true, currentpage: 1 }
  const dispatch = jest.fn()

  const wrapper = ({ children }) => (
    <EmployeesState>
      <FilterContext.Provider value={{ state, dispatch }}>
        {children}
      </FilterContext.Provider>
    </EmployeesState>
  )

  const mockUseContext = jest
    .fn()
    .mockImplementation(() => ({ state, dispatch }))

  React.useContext = mockUseContext

  describe('PaginationContainer', () => {
    it('should return present employees & filter  with its state', () => {
      MockSearchContainer()
      const { result } = renderHook(() => useFilter(), { wrapper })
      expect(result.current.state.filtered_employees.length).toBe(0)
      expect(result.current.state.grid_view).toBe(true)
      expect(result.current.state.currentpage).toBe(1)
    })
    it('should dont show lits-view by defaulty', () => {
      MockSearchContainer()

      expect(screen.queryByTestId('view')).not.toBeInTheDocument()
    })
  })
})
