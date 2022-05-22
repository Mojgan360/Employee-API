import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { createContext } from 'react'
import EmployeesContext from '../../../../context/employees/employeesContext'
import FilterContext from '../../../../context/filter/filterContext'
import GridView from '../GridView'
import FilterState from '../../../../context/filter/FilterState'
import EmployeesState from '../../../../context/employees/EmployeesState'

const MockGridView = (props) => {
  // console.log('öööööööööhhhhhh', props.employees_loading)
  render(
    <EmployeesState>
      <FilterState>
        <GridView {...props} />
      </FilterState>
    </EmployeesState>
  )
}

describe('GeridView', () => {
  it('should rendre 317 GridCard components', async () => {
    MockGridView()

    // console.log('EEEEE', employees);
    // expect(screen.queryAllByRole('article').length).toBe(317)
    // expect(screen.getAllByRole('article').length).toBe(317)
    // expect(screen.getAllByTestId('all').length).toBe(317)
    // expect(screen.queryAllByTestId('all').length).toBe(317)
  }) //end of it
}) //end od paren describe
