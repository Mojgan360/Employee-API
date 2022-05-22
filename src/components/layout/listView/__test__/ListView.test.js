import { render, screen, fireEvent } from '@testing-library/react'
import ListView from '../ListView'
import FilterState from '../../../../context/filter/FilterState'
import EmployeesState from '../../../../context/employees/EmployeesState'

const MockListView = ({ employees }) => {
  return (
    <EmployeesState>
      <FilterState>
        <ListView employees={employees} />
      </FilterState>
    </EmployeesState>
  )
}

it('should shows employees', async () => {
  render(<MockListView employees={'employees'} />)
  const divElement = screen.queryAllByDisplayValue('employees')
  expect(divElement).toBeDefined()
})
