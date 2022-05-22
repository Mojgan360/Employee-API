import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import React from 'react'

import SearchContainer from '../SearchContainer'
import EmployeesState from '../../../../context/employees/EmployeesState'
import FilterState from '../../../../context/filter/FilterState'

const MockSearchContainer = () => {
  return (
    <EmployeesState>
      <FilterState>
        <SearchContainer />
      </FilterState>
    </EmployeesState>
  )
}
afterEach(() => {
  cleanup()
})
beforeEach(() => {
  render(<MockSearchContainer />)
})

describe('SearchContainer', () => {
  //input
  it('should be initiality empty', () => {
    const inputElement = screen.getByPlaceholderText(/Search For Employee/i)
    expect(inputElement.value).toBe('')
  })
  it('should be able to type a name', () => {
    const inputElement = screen.getByPlaceholderText(/Search For Employee/i)
    fireEvent.change(inputElement, { target: { value: 'Lisa' } })
    expect(inputElement.value).toBe('Lisa')
  })
  //
})
